import {
  FaFacebookMessenger,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
  FaRegEnvelope,
  FaTelegramPlane,
  FaUser,
} from "react-icons/fa";
import { FaMessage, FaRegMessage } from "react-icons/fa6";
import AppButton from "../components/AppButton.tsx";
import { Map } from "../components/Map.tsx";

const ContactsPage = () => {
  return (
    <>
      <div className="flex bg-accent-blue   w-full py-16 mt-2">
        <div className="flex flex-col gap-4 w-2/3 items-center mx-auto ">
          <span className="font-bold text-5xl text-white">Контакты</span>
          <div className="flex  items-center text-center mx-auto max-w-2/3">
            <p className="text-xl text-[#DBEAFE] ">
              Мы всегда рады помочь вам. Свяжитесь с нами удобным для вас
              способом
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/3 grid grid-cols-4 mx-auto py-16 items-center gap-10 text-center">
        <div className="flex flex-col h-56 gap-2 rounded-lg items-center p-6 px-10 bg-[#F9FAFB]">
          <div className="bg-[#DBEAFE] p-2 rounded-lg">
            <FaMapMarkerAlt className="size-6 text-accent-blue" />
          </div>
          <span className="font-semibold text-lg">Адрес клиники</span>
          <span className="text-accent-blue font-semibold">
            г. Москва, ул. Ленина, д. 123
          </span>
          <span className="text-text-gray text-sm">
            Бизнес-центр "Медицинский", 3 этаж
          </span>
        </div>
        <div className="flex flex-col h-56 gap-2 rounded-lg items-center p-6 px-10 bg-[#F9FAFB]">
          <div className="bg-[#DBEAFE] p-2 rounded-lg">
            <FaPhoneAlt className="size-6 text-accent-blue" />
          </div>
          <span className="font-semibold text-lg">Телефоны</span>
          <span className="text-accent-blue font-semibold">
            +7 (495) 123-45-67
          </span>
          <span className="text-text-gray text-sm">
            Единая справочная служба
          </span>
        </div>
        <div className="flex flex-col h-56 gap-2 rounded-lg items-center p-6 px-10 bg-[#F9FAFB]">
          <div className="bg-[#DBEAFE] p-2 rounded-lg">
            <FaRegEnvelope className="size-6 text-accent-blue" />
          </div>
          <span className="font-semibold text-lg">Электронная почта</span>
          <span className="text-accent-blue font-semibold">
            info@kkrit-clinic.ru
          </span>
          <span className="text-text-gray text-sm">
            Для общих вопросов и предложений
          </span>
        </div>
        <div className="flex flex-col h-56 gap-2 rounded-lg items-center p-6 px-10 bg-[#F9FAFB]">
          <div className="bg-[#DBEAFE] p-2 rounded-lg">
            <FaRegClock className="size-6 text-accent-blue" />
          </div>
          <span className="font-semibold text-lg">Режим работы</span>
          <span className="text-accent-blue font-semibold">
            Пн-Пт: 8:00 - 20:00
          </span>
          <span className="text-text-gray text-sm">
            Сб: 9:00 - 18:00, Вс: 10:00 - 16:00
          </span>
        </div>
      </div>
      <div className="flex w-full bg-[#F9FAFB] py-12">
        <div className="grid items-center gap-8 grid-cols-2 w-2/3 mx-auto">
          <div className="bg-white flex flex-col gap-4 rounded-lg p-8">
            <span className="font-bold text-xl">Как нас найти</span>

            <div className="w-full bg-[#E5E7EB] h-96 rounded-lg flex">
              <Map />
            </div>

            <span className="text-sm font-bold text-text-gray">
              Адрес:{" "}
              <span className="font-normal">
                {" "}
                г. Москва, ул. Ленина, д. 123
              </span>
            </span>
            <span className="text-sm font-bold text-text-gray">
              Метро:{" "}
              <span className="font-normal">
                {" "}
                Станция метро "Парк культуры" (10 минут пешком)
              </span>
            </span>
            <span className="text-sm font-bold text-text-gray">
              Ориентир:{" "}
              <span className="font-normal">
                {" "}
                Бизнес-центр "Медицинский", 3 этаж
              </span>
            </span>
            <span className="text-sm font-bold text-text-gray">
              Парковка:{" "}
              <span className="font-normal">
                {" "}
                Бесплатная парковка для пациентов клиники
              </span>
            </span>
          </div>
          <div className="bg-white flex flex-col gap-4 rounded-lg p-8">
            <div className="flex gap-2 items-center">
              <FaFacebookMessenger className="size-5 text-accent-blue" />{" "}
              <span className="font-bold text-xl">Обратная связь</span>
            </div>

            <form className="gap-6 flex flex-col w-full" action="">
              <div className="grid grid-cols-2 gap-6 w-full">
                {" "}
                <div className="flex flex-col gap-2">
                  <label
                    className="flex items-center gap-2 text-text-gray"
                    htmlFor="name"
                  >
                    <FaUser /> <span className="font-bold">Имя *</span>{" "}
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Ваше имя"
                    className=" bg-white px-4 py-2 border  border-[#D1D5DB] rounded-lg w-full focus:outline-none  "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="flex items-center gap-2 text-text-gray"
                    htmlFor="Email"
                  >
                    <FaRegEnvelope />{" "}
                    <span className="font-bold">Email *</span>{" "}
                  </label>
                  <input
                    id="email"
                    type="text"
                    placeholder="your@email.com"
                    className=" bg-white px-4 py-2 border  border-[#D1D5DB] rounded-lg w-full focus:outline-none  "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="flex items-center gap-2 text-text-gray"
                    htmlFor="phone"
                  >
                    <FaPhoneAlt />{" "}
                    <span className="font-bold">Телефон *</span>{" "}
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="+7 (___) ___-__-__"
                    className=" bg-white px-4 py-2 border  border-[#D1D5DB] rounded-lg w-full focus:outline-none  "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="flex items-center gap-2 text-text-gray"
                    htmlFor="name"
                  >
                    <span className="font-bold">Тема обращения</span>{" "}
                  </label>
                  <input
                    id="theme"
                    type="text"
                    placeholder="Напишите тему"
                    className=" bg-white px-4 py-2 border  border-[#D1D5DB] rounded-lg w-full focus:outline-none  "
                  />
                </div>
              </div>
              <label
                htmlFor="message"
                className="flex gap-2 items-center text-text-gray"
              >
                <FaMessage className="size-4" />
                <span className="font-bold">Сообщение *</span>
              </label>
              <textarea
                id="message"
                className="border border-[#D1D5DB] p-4 rounded-lg resize-none"
                placeholder="Опишите ваш вопрос или предложение..."
                rows={8}
              />
              <AppButton
                icon={<FaTelegramPlane />}
                text="Отправить сообщение"
                variant="blue"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-center py-12">
        <span className="text-3xl font-bold">Дополнительные способы связи</span>
        <span className="text-xl text-text-gray">
          Выберите удобный для вас способ связи с нами
        </span>
        <div className="grid-cols-3 gap-6 grid mx-auto w-2/3 mt-8 ">
          <div className="flex py-10 px-6 flex-col gap-4 items-center rounded-lg bg-[#F0FDF4]">
            <FaPhoneAlt className="size-6 text-[#16A34A]" />
            <span className="font-bold text-xl">По телефону</span>
            <span className="text-sm text-text-gray">
              Быстрая консультация и запись на прием
            </span>
            <AppButton
              text="Позвонить"
              icon={<FaPhoneAlt />}
              className="!bg-[#16A34A]"
              variant="blue"
            />
          </div>
          <div className="flex py-10 px-6 flex-col gap-4 items-center rounded-lg bg-[#EFF6FF]">
            <FaRegEnvelope className="size-6 text-[#2563EB]" />
            <span className="font-bold text-xl">По email</span>
            <span className="text-sm text-text-gray">
              Для документов и подробных вопросов
            </span>
            <AppButton
              text="Позвонить"
              icon={<FaRegEnvelope />}
              className="!bg-[#2563EB]"
              variant="blue"
            />
          </div>
          <div className="flex py-10 px-6 flex-col gap-4 items-center rounded-lg bg-[#FAF5FF]">
            <FaRegMessage className="size-6 text-[#9333EA]" />
            <span className="font-bold text-xl">По телефону</span>
            <span className="text-sm text-text-gray">
              Быстрая консультация и запись на прием
            </span>
            <AppButton
              text="Позвонить"
              icon={<FaRegMessage />}
              className="!bg-[#9333EA]"
              variant="blue"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
