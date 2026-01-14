import asyncio
import psycopg2
from datetime import datetime
from aiogram import Bot, Dispatcher, types, F
from aiogram.filters import Command, CommandObject
from aiogram.fsm.context import FSMContext
from aiogram.fsm.state import State, StatesGroup
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, BotCommand, InlineKeyboardMarkup, InlineKeyboardButton
from apscheduler.schedulers.asyncio import AsyncIOScheduler

# --- НАСТРОЙКИ ---
TOKEN = "8438788498:AAFdjcoobXJ1ghK8JhrKTtB-9kb1-x6NOdI"
DB_CONFIG = {
    "dbname": "kkrit-database",
    "user": "BULAT",
    "password": "ldkfnvsdnv134",
    "host": "localhost",
    "port": "5432"
}


# --- СОСТОЯНИЯ ДЛЯ ВИКТОРИНЫ ---
class QuizStates(StatesGroup):
    question_1 = State()
    question_2 = State()


bot = Bot(token=TOKEN)
dp = Dispatcher()

# --- КЛАВИАТУРЫ ---

main_menu = ReplyKeyboardMarkup(
    keyboard=[
        [KeyboardButton(text="Получить бонус 🎁")],
        [KeyboardButton(text="Мои записи 📅")]
    ],
    resize_keyboard=True
)

kb_q1 = ReplyKeyboardMarkup(
    keyboard=[
        [KeyboardButton(text="Витамин D"), KeyboardButton(text="Витамин C")],
        [KeyboardButton(text="Витамин A"), KeyboardButton(text="Витамин B12")]
    ],
    resize_keyboard=True,
    one_time_keyboard=True
)

kb_q2 = ReplyKeyboardMarkup(
    keyboard=[
        [KeyboardButton(text="Рецепт"), KeyboardButton(text="Справка")],
        [KeyboardButton(text="Инструкция"), KeyboardButton(text="Чек")]
    ],
    resize_keyboard=True,
    one_time_keyboard=True
)


# --- ФУНКЦИИ БАЗЫ ДАННЫХ ---

def db_query(query, params=(), fetch=False, commit=False):
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        cur = conn.cursor()
        cur.execute(query, params)
        if commit:
            conn.commit()
        result = cur.fetchall() if fetch else cur.rowcount
        cur.close()
        conn.close()
        return result
    except Exception as e:
        print(f"❌ Ошибка БД: {e}")
        return None


def add_column_if_not_exists():
    db_query("ALTER TABLE applications ADD COLUMN IF NOT EXISTS telegram_id BIGINT;", commit=True)


# --- ПЛАНИРОВЩИК УВЕДОМЛЕНИЙ ---

async def send_24h_reminders():
    print(f"🔍 [{datetime.now().strftime('%H:%M:%S')}] Проверка базы на завтрашние записи...")
    query = """
        SELECT telegram_id, full_name, date_time 
        FROM applications 
        WHERE telegram_id IS NOT NULL 
        AND date_time::timestamp BETWEEN (NOW() + interval '23 hours') AND (NOW() + interval '24 hours')
    """
    reminders = db_query(query, fetch=True)
    if reminders:
        for tg_id, name, dt in reminders:
            try:
                await bot.send_message(tg_id, f"⏰ Напоминание! {name}, вы записаны на прием {dt}. Ждем вас завтра!")
                print(f"✅ Уведомление отправлено: {name}")
            except Exception as e:
                print(f"❌ Ошибка отправки пользователю {tg_id}: {e}")


# --- ОБРАБОТЧИКИ СООБЩЕНИЙ ---

@dp.message(Command("start"))
async def cmd_start(message: types.Message, command: CommandObject):
    app_id = command.args
    if app_id:
        update_query = "UPDATE applications SET telegram_id = %s WHERE id = %s"
        if db_query(update_query, (message.from_user.id, app_id), commit=True) > 0:
            await message.answer(f"✅ Успешно! Вы подписаны на уведомления по заявке №{app_id}.", reply_markup=main_menu)
        else:
            await message.answer(f"❌ Заявка №{app_id} не найдена в базе.", reply_markup=main_menu)
    else:
        await message.answer("Привет! Я бот аптеки. Управляйте своими записями и получайте бонусы за знания!",
                             reply_markup=main_menu)


# --- ЛОГИКА: МОИ ЗАПИСИ И ОТМЕНА ---

@dp.message(F.text == "Мои записи 📅")
async def show_my_records(message: types.Message):
    tg_id = message.from_user.id
    query = "SELECT id, full_name, date_time FROM applications WHERE telegram_id = %s ORDER BY date_time ASC"
    records = db_query(query, (tg_id,), fetch=True)

    if not records:
        await message.answer("У вас пока нет активных записей. Записаться можно на нашем сайте!")
    else:
        await message.answer("📋 Ваши текущие записи (нажмите кнопку под записью для отмены):")
        for app_id, name, dt in records:
            ikb = InlineKeyboardMarkup(inline_keyboard=[
                [InlineKeyboardButton(text="Отменить эту запись ❌", callback_data=f"delete_{app_id}")]
            ])
            await message.answer(f"👤 Пациент: {name}\n⏰ Время: {dt}", reply_markup=ikb)


@dp.callback_query(F.data.startswith("delete_"))
async def delete_appointment(callback: types.CallbackQuery):
    app_id = callback.data.split("_")[1]
    delete_query = "DELETE FROM applications WHERE id = %s"

    if db_query(delete_query, (app_id,), commit=True) > 0:
        await callback.message.edit_text("✅ Запись успешно отменена и удалена.")
        await callback.answer("Удалено")
    else:
        await callback.answer("Ошибка: запись не найдена или уже удалена.")


# --- ВИКТОРИНА ---

@dp.message(F.text == "Получить бонус 🎁")
@dp.message(Command("bonus"))
async def start_quiz(message: types.Message, state: FSMContext):
    await message.answer("🎁 Викторина началась! Ответьте на 2 вопроса.\n\n"
                         "Вопрос 1: Какой витамин вырабатывается в коже под воздействием солнца?",
                         reply_markup=kb_q1)
    await state.set_state(QuizStates.question_1)


@dp.message(QuizStates.question_1)
async def quiz_q1(message: types.Message, state: FSMContext):
    if message.text == "Витамин D":
        await message.answer("✅ Правильно!\n\nВопрос 2: Какой документ выписывает врач для покупки лекарств?",
                             reply_markup=kb_q2)
        await state.set_state(QuizStates.question_2)
    else:
        await message.answer("❌ Неверно. Попробуйте еще раз!", reply_markup=kb_q1)


@dp.message(QuizStates.question_2)
async def quiz_q2(message: types.Message, state: FSMContext):
    if message.text == "Рецепт":
        await message.answer("🎉 Поздравляем! Вы знаток медицины.\n\n"
                             "Ваш промокод: СКИБОБ 150\n"
                             "Используйте его при посещении аптеки!", reply_markup=main_menu)
        await state.clear()
    else:
        await message.answer("❌ Ошибка. Выберите правильный вариант на кнопках!", reply_markup=kb_q2)


# --- ГЛАВНЫЙ ЦИКЛ ЗАПУСКА ---

async def main():
    # Инициализация БД
    add_column_if_not_exists()

    # Установка команд меню
    await bot.set_my_commands([
        BotCommand(command="start", description="Запустить бота"),
        BotCommand(command="bonus", description="Получить скидку")
    ])

    # Настройка планировщика
    scheduler = AsyncIOScheduler()
    scheduler.add_job(send_24h_reminders, "interval", minutes=1)
    scheduler.start()

    print("🚀 Бот запущен и перешел в режим ожидания сообщений...")

    # Запуск бесконечного процесса опроса серверов Telegram
    try:
        await dp.start_polling(bot)
    finally:
        await bot.session.close()


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except (KeyboardInterrupt, SystemExit):
        print("\n🛑 Бот остановлен.")
