import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
  FaRegEnvelope,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="flex flex-col items-center py-8 bg-[#1F2937] text-[#D1D5DB] p">
      <div className="flex w-2/3 gap-4 justify-between mx-auto items-center">
        <div className="flex flex-col gap-4 min-w-1/4 h-60 ">
          <div className="flex gap-2  items-center">
            <div className="px-3 py-2  text-white font-bold bg-accent-blue rounded-lg">
              ККРИТ
            </div>
            <span>Клиника</span>
          </div>
          <p>
            Современная медицинская клиника, предоставляющая качественные
            медицинские услуги с заботой о каждом пациенте.
          </p>
          <div className="flex gap-4 items-center">
            {" "}
            <button>
              <FaInstagram className="size-5" />
            </button>
            <button>
              <FaFacebook className="size-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-w-1/4 h-60">
          <span className="text-white font-bold">Быстрая навигация</span>
          <Link to="/" className="text-[#D1D5DB]  mt-2">
            Главная
          </Link>
          <Link to="/" className="text-[#D1D5DB]">
            О клинике
          </Link>
          <Link to="/" className="text-[#D1D5DB]">
            Услуги
          </Link>
          <Link to="/" className="text-[#D1D5DB]">
            Врачи
          </Link>
          <Link to="/" className="text-[#D1D5DB]">
            Расписание
          </Link>
          <Link to="/" className="text-[#D1D5DB]">
            Новости
          </Link>
        </div>
        <div className="flex flex-col gap-2 min-w-1/4 h-60">
          <span className="text-white font-bold">Популярные услуги</span>
          <Link to="/" className="text-[#D1D5DB]  mt-2">
            Прием терапевта
          </Link>
          <Link to="/" className="text-[#D1D5DB]">
            Консультация кардиолога
          </Link>
          <Link to="/" className="text-[#D1D5DB]">
            Консультация невролога
          </Link>
          <Link to="/" className="text-[#D1D5DB]">
            УЗИ исследование
          </Link>
          <Link to="/" className="text-[#D1D5DB]">
            ЭКГ исследование
          </Link>
        </div>
        <div className="flex flex-col gap-2 min-w-1/4 h-60 text-white">
          <span className="text-white font-bold">Контакты</span>
          <Link to="/" className=" mt-2">
            <div className="flex gap-2 items-center">
              <FaPhoneAlt className="size-5 text-accent-blue" />
              <span>+7(495) 123-45-67</span>
            </div>
          </Link>
          <Link to="/">
            <div className="flex gap-2 items-center">
              <FaRegEnvelope className="size-5 text-accent-blue" />
              <span>info@kkrit-clinic.ru</span>
            </div>
          </Link>
          <Link to="/">
            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt className="size-5 text-accent-blue" />
              <span>г. Москва ул. Ленина 123</span>
            </div>
          </Link>
          <Link to="/">
            <div className="flex gap-2 items-center">
              <FaRegClock className="size-5 text-accent-blue" />
              <div className="flex flex-col gap-1">
                <span>Пн-Пт 8:00-20:00</span>
                <span>Сб 9:00-16:00</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex w-2/3 gap-4 justify-between mx-auto border-t  border-t-[#374151] mt-6   pt-8  text-[#D1D5DB]  items-center">
        <span>© 2024 ККРИТ Клиника. Все права защищены.</span>
        <div className="flex gap-4 items-center">
          <Link to="/">Пациентам</Link>
          <Link to="/">Политика Конфиденциальности</Link>
          <Link to="/">Пользовательское соглашение</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
