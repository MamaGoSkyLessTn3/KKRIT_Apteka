import {
  FaChevronRight,
  FaDownload,
  FaPhoneAlt,
  FaRegClock,
  FaRegFileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import FaqCard from "../components/FaqCard.tsx";
import AppButton from "../components/AppButton.tsx";

const FaqPage = () => {
  return (
    <>
      <div className="flex bg-accent-blue   w-full py-16 mt-2">
        <div className="flex flex-col gap-4 w-2/3 items-center mx-auto ">
          <span className="font-bold text-5xl text-white">
            Информация для пациентов
          </span>
          <div className="flex  items-center text-center mx-auto max-w-2/3">
            <p className="text-xl text-[#DBEAFE] ">
              Важная информация о порядке оказания медицинских услуг, подготовке
              к приему и ваших правах
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/3 grid grid-cols-3 items-center gap-4 justify-between mx-auto  py-16">
        <div className="flex flex-col gap-2 px-14 py-8 rounded-lg items-center min-h-50 bg-[#EFF6FF]">
          <FaPhoneAlt className="size-6 text-accent-blue" />
          <span className="font-bold text-xl">Телефон для связи</span>
          <span className="font-semibold text-accent-blue text-xl">
            +7 (495) 123-45-67
          </span>
          <span className="text-text-gray">
            Работаем ежедневно с 8:00 до 20:00
          </span>
        </div>
        <div className="flex flex-col gap-2 px-14 py-8 rounded-lg items-center max-h-50 bg-[#F0FDF4]">
          <FaRegClock className="size-6 text-[#16A34A]" />
          <span className="font-bold text-xl">Режим работы</span>
          <div className="flex flex-col text-center">
            <span className="text-text-gray">Пн-Пт: 8:00 - 20:00</span>
            <span className="text-text-gray">Сб: 9:00 - 18:00</span>
            <span className="text-text-gray">Вс: 10:00 - 16:00</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-14 py-8  rounded-lg items-center min-h-50 bg-[#FAF5FF]">
          <FaShieldAlt className="size-6 text-[#9333EA]" />
          <div className="flex flex-col"></div>
          <span className="font-bold text-xl">Конфиденциальность</span>
          <span className="text-text-gray">
            Все медицинские данные защищены и не передаются третьим лицам
          </span>
        </div>
      </div>
      <div className="w-full bg-[#F9FAFB] py-12">
        <div className="flex flex-col gap-12 mx-auto items-center w-1/2">
          <div className="flex-col flex gap-2 text-center">
            <span className="font-bold text-3xl">Часто задаваемые вопросы</span>
            <span className="text-xl text-text-gray">
              Ответы на самые популярные вопросы наших пациентов
            </span>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <FaqCard
              title="Как записаться на прием к врачу?"
              description="Вы можете записаться на прием через онлайн-форму на нашем сайте, по телефону клиники или лично в
регистратуре. Для записи потребуется указать ваши контактные данные и предпочтительное время
приема."
            />
            <FaqCard
              title="Какие документы нужны для первичного приема?"
              description="Для первичного приема вам потребуется паспорт, полис обязательного медицинского страхования
(ОМС), СНИЛС и направление от врача (если имеется). Для детей также необходимо свидетельство о
рождении."
            />
            <FaqCard
              title="Можно ли отменить или перенести запись?"
              description="Да, вы можете отменить или перенести запись, предварительно уведомив нас не позднее чем за 24 часа
до назначенного времени приема. Это можно сделать по телефону или через личный кабинет на сайте."
            />
            <FaqCard
              title="Как подготовиться к анализам и исследованиям?"
              description="Подготовка зависит от типа анализа. Общие рекомендации: сдавать анализы утром натощак (не есть 8-
12 часов), исключить физическую нагрузку и стресс за день до исследования, не пить алкоголь. Точные
рекомендации вы получите при записи."
            />
            <FaqCard
              title="Как получить результаты анализов?"
              description="Результаты анализов можно получить в личном кабинете на сайте, по электронной почте или в клинике.
Сроки готовности различных анализов от 1 до 7 рабочих дней. Мы уведомим вас о готовности
результатов по SMS или email."
            />
            <FaqCard
              title="Какие способы оплаты доступны?"
              description="В клинике принимаются наличные платежи, банковские карты, а также доступна оплата через
мобильные приложения и онлайн-банкинг. Для корпоративных клиентов возможна безналичная оплата
по договору."
            />
          </div>
        </div>
      </div>
      <div className="w-2/3 mx-auto flex flex-col bg-white py-12 gap-10 items-center">
        <div className="flex flex-col text-center gap-4">
          {" "}
          <span className="font-bold text-3xl">Документы и формы</span>
          <span className="text-xl text-text-gray">
            Важные документы, которые вам могут понадобиться
          </span>
        </div>

        <div className="flex  gap-4 items-center w-full mx-auto">
          <div className="flex relative flex-col gap-4 bg-[#F9FAFB] rounded-lg h-50 w-1/3 px-18 py-4">
            <div className="flex items-center absolute top-5 left-5 bg-[#DBEAFE] p-2 rounded-lg">
              {" "}
              <FaRegFileAlt className="text-accent-blue size-6" />
            </div>
            <span className=" font-bold text-lg">Правила записи на прием</span>
            <span className="text-sm text-gray">
              Информация о порядке записи к врачам и подготовке к приему
            </span>
            <AppButton
              className="self-start"
              text="Скачать"
              variant="blue"
              icon={<FaDownload />}
            />
          </div>
          <div className="flex relative flex-col gap-4 bg-[#F9FAFB] rounded-lg w-1/3  h-50 px-18 py-4">
            <div className="flex items-center absolute top-5 left-5 bg-[#DBEAFE] p-2 rounded-lg">
              {" "}
              <FaShieldAlt className="text-accent-blue size-6" />
            </div>
            <span className=" font-bold text-lg">
              Согласие на обработку персональных данных
            </span>
            <span className="text-sm text-gray">
              Документ для согласия на обработку ваших персональных данных
            </span>
            <AppButton
              className="self-start"
              text="Скачать"
              variant="blue"
              icon={<FaDownload />}
            />
          </div>
          <div className="flex relative flex-col gap-4 bg-[#F9FAFB] rounded-lg w-1/3 h-50 px-18 py-4">
            <div className="flex items-center absolute top-5 left-5 bg-[#DBEAFE] p-2 rounded-lg">
              {" "}
              <FaRegFileAlt className="text-accent-blue size-6" />
            </div>
            <span className=" font-bold text-lg">Памятка пациента</span>
            <span className="text-sm text-gray">
              Важная информация для пациентов о правах и обязанностях
            </span>
            <AppButton
              className="self-start"
              text="Скачать"
              variant="blue"
              icon={<FaDownload />}
            />
          </div>
        </div>
      </div>
      <div className=" py-12 w-full bg-accent-blue">
        <div className="flex flex-col  gap-6 w-2/3  items-center  justify-center mx-auto">
          <div className="flex flex-col items-center gap-4  max-w-2/5 text-center text-white">
            {" "}
            <span className="font-bold text-3xl ">Остались вопросы?</span>
            <p className="text-[#DBEAFE]">
              Наши специалисты всегда готовы помочь вам и ответить на все
              интересующие вопросы
            </p>
          </div>

          <div className="flex items-center gap-4">
            <AppButton
              className="!text-accent-blue"
              text="Позвонить нам"
              variant="gray"
              icon={<FaPhoneAlt />}
            />
            <AppButton
              className="!bg-[#1D4ED8] "
              text="Контакты"
              variant="blue"
              iconSide={"right"}
              icon={<FaChevronRight />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
