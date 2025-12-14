const { Doctor, Service } = require('../models/models') // путь подправь, если нужно
const sequelize = require('../db')

const doctorsData = [
	// Терапевты (3 шт)
	{
		first_name: 'Алексей',
		middle_name: 'Иванович',
		last_name: 'Петров',
		type: 'Терапевт',
		experience: '15 лет',
		description: 'Ведущий терапевт, специалист по хроническим заболеваниям',
		avatar: 'therapist1.jpg',
	},
	{
		first_name: 'Мария',
		middle_name: 'Сергеевна',
		last_name: 'Сидорова',
		type: 'Терапевт',
		experience: '10 лет',
		description: 'Профилактика и лечение ОРВИ',
		avatar: 'therapist2.jpg',
	},
	{
		first_name: 'Дмитрий',
		middle_name: 'Александрович',
		last_name: 'Козлов',
		type: 'Терапевт',
		experience: '8 лет',
		description: 'Сердечно-сосудистые патологии в терапии',
		avatar: 'therapist3.jpg',
	},

	// Педиатры (3 шт)
	{
		first_name: 'Елена',
		middle_name: 'Владимировна',
		last_name: 'Морозова',
		type: 'Педиатр',
		experience: '20 лет',
		description: 'Главный детский врач клиники',
		avatar: 'pediatr1.jpg',
	},
	{
		first_name: 'Ольга',
		middle_name: 'Петровна',
		last_name: 'Новикова',
		type: 'Педиатр',
		experience: '12 лет',
		description: 'Специалист по новорожденным',
		avatar: 'pediatr2.jpg',
	},
	{
		first_name: 'Сергей',
		middle_name: 'Михайлович',
		last_name: 'Фёдоров',
		type: 'Педиатр',
		experience: '9 лет',
		description: 'Вакцинация и иммунология',
		avatar: 'pediatr3.jpg',
	},

	// Кардиологи (3 шт)
	{
		first_name: 'Виктор',
		middle_name: 'Николаевич',
		last_name: 'Лебедев',
		type: 'Кардиолог',
		experience: '25 лет',
		description: 'Профессор, ведущий кардиолог',
		avatar: 'cardiolog1.jpg',
	},
	{
		first_name: 'Наталья',
		middle_name: 'Андреевна',
		last_name: 'Волкова',
		type: 'Кардиолог',
		experience: '18 лет',
		description: 'Гипертония и аритмия',
		avatar: 'cardiolog2.jpg',
	},
	{
		first_name: 'Павел',
		middle_name: 'Олегович',
		last_name: 'Смирнов',
		type: 'Кардиолог',
		experience: '14 лет',
		description: 'ЭХО-КГ и диагностика',
		avatar: 'cardiolog3.jpg',
	},
]

const servicesData = [
	// Услуги терапевта (3 шт)
	{
		title: 'Первичный приём терапевта',
		type: 'Терапевт',
		price: '1500',
		duration: '30 мин',
		description: 'Осмотр, анамнез, назначение анализов',
	},
	{
		title: 'Повторный приём терапевта',
		type: 'Терапевт',
		price: '1200',
		duration: '20 мин',
		description: 'Корректировка лечения',
	},
	{
		title: 'Выдача больничного листа',
		type: 'Терапевт',
		price: '800',
		duration: '15 мин',
		description: 'Оформление листка нетрудоспособности',
	},

	// Услуги педиатра (3 шт)
	{
		title: 'Первичный приём педиатра',
		type: 'Педиатр',
		price: '1800',
		duration: '40 мин',
		description: 'Осмотр ребёнка, консультация',
	},
	{
		title: 'Осмотр здорового ребёнка (до 1 года)',
		type: 'Педиатр',
		price: '2000',
		duration: '45 мин',
		description: 'Патронаж и план вакцинации',
	},
	{
		title: 'Консультация по вакцинации',
		type: 'Педиатр',
		price: '1000',
		duration: '20 мин',
		description: 'Индивидуальный график прививок',
	},

	// Услуги кардиолога (3 шт)
	{
		title: 'Первичный приём кардиолога',
		type: 'Кардиолог',
		price: '2500',
		duration: '45 мин',
		description: 'Сбор жалоб, ЭКГ',
	},
	{
		title: 'Расшифровка ЭКГ + консультация',
		type: 'Кардиолог',
		price: '2000',
		duration: '30 мин',
		description: 'Анализ электрокардиограммы',
	},
	{
		title: 'Суточное мониторирование АД',
		type: 'Кардиолог',
		price: '3500',
		duration: 'суточный',
		description: 'Холтеровское мониторирование',
	},
]

async function fillDatabase() {
	try {
		await sequelize.authenticate()
		console.log('Подключились к базе')

		// Один раз с force: true — создаст таблицы, если их нет, или пересоздаст пустые
		await sequelize.sync()
		console.log('Таблицы готовы (Doctor_Service и другие созданы)')

		// Создаём записи
		const doctors = await Doctor.bulkCreate(doctorsData)
		const services = await Service.bulkCreate(servicesData)
		console.log('Создано 9 докторов и 9 услуг')

		// Группируем по типу
		const therapistDoctors = doctors.filter(d => d.type === 'Терапевт')
		const pediatricDoctors = doctors.filter(d => d.type === 'Педиатр')
		const cardioDoctors = doctors.filter(d => d.type === 'Кардиолог')

		const therapistServices = services.filter(s => s.type === 'Терапевт')
		const pediatricServices = services.filter(s => s.type === 'Педиатр')
		const cardioServices = services.filter(s => s.type === 'Кардиолог')

		// Набиваем связи в Doctor_Service
		for (const doc of therapistDoctors) await doc.setServices(therapistServices)
		for (const doc of pediatricDoctors) await doc.setServices(pediatricServices)
		for (const doc of cardioDoctors) await doc.setServices(cardioServices)

		console.log(
			'СВЯЗИ НАБИТЫ! В таблице "Doctor_Service" теперь 27 строк (по 3 услуги на доктора)'
		)
		console.log(
			'Готово, братан. Теперь иди тестируй фронт — всё должно работать'
		)
		console.log(
			'Больше не запускай с force: true — удали эту строку, чтоб не стирало данные'
		)

		process.exit(0)
	} catch (error) {
		console.error('Опять пиздец:', error)
		process.exit(1)
	}
}

fillDatabase()
