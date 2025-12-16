import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { Link, useLocation } from "react-router";
import { cn } from "../utils/css.ts";

const Header = () => {
  const routingHeader = [
    { title: "Главная", path: "/" },
    { title: "О клинике", path: "/about" },
    { title: "Услуги", path: "/services" },
    { title: "Врачи", path: "/doctors" },
    { title: "Расписание", path: "/application" },
    { title: "Пациентам", path: "/faq" },
    { title: "Новости", path: "/news" },
    { title: "Контакты", path: "/contacts" },
  ];
  const location = useLocation();

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-[#EFF6FF] border-b-[#DBEAFE] text-text-gray flex items-center w-full  py-4">
        <div className="flex  w-2/3 mx-auto justify-between">
          <div className="flex items-center gap-6">
            <div className="flex  items-center gap-2">
              <FaPhoneAlt /> +7 (495) 123-45 67
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaRegClock />
              Пн-Пт: 8:00-20:00, Сб: 9:00-16:00
            </div>
            <div className="flex items-center justify-center  gap-2">
              <FaMapMarkerAlt />
              г. Москва, ул. Ленина, 123
            </div>
          </div>
          <div className="flex items-center justify-center  font-semibold text-accent-blue">
            ККРИТ Клиника
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mx-auto w-2/3">
        <div className="flex gap-2 items-center">
          <span className="text-white rounded-lg p-2 bg-accent-blue">
            ККРИТ
          </span>
          Клиника
        </div>
        <nav className="flex gap-14 items-center ">
          {routingHeader.map((item) => (
            <Link
              to={item.path}
              className={cn(
                "border-b-2",
                location.pathname === item.path
                  ? " border-accent-blue text-accent-blue"
                  : "border-white",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
