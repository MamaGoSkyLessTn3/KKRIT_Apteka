import AppButton from "../components/AppButton.tsx";
import {
  FaChevronRight,
  FaMapMarkerAlt,
  FaMedal,
  FaPhoneAlt,
  FaRegCalendar,
  FaRegClock,
  FaRegHeart,
  FaStar,
  FaUserFriends,
} from "react-icons/fa";
import AboutCard from "../components/AboutCard.tsx";
import { useEffect, useState } from "react";
import { fetchDoctors, fetchServices } from "../api/services/fetch.ts";
import type { Doctor, Service } from "../types/service.ts";
import ServiceCard from "../components/ServiceCard.tsx";
import DoctorCard from "../components/DoctorCard.tsx";

export const MainPage = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [isServicesLoading, setServicesLoading] = useState<boolean>(false);
  const [isDoctorsLoading, setDoctorsLoading] = useState<boolean>(false);

  const getServices = async () => {
    try {
      setServicesLoading(true);
      const { data } = await fetchServices();
      setServices(data);
    } catch (error) {
      console.error("REAL ERROR 👉", error);
    } finally {
      setServicesLoading(false);
    }
  };
  const getDoctors = async () => {
    try {
      setDoctorsLoading(true);
      const { data } = await fetchDoctors();
      setDoctors(data.doctors);
      console.log(data.doctors);
    } catch (error) {
      console.error("REAL ERROR 👉", error);
    } finally {
      setDoctorsLoading(false);
    }
  };
  useEffect(() => {
    getServices();
    getDoctors();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 mt-2 items-center text-center justify-center bg-linear-to-r from-accent-blue py-20 to-[#1E40AF]">
        <span className="font-bold text-white text-6xl">
          Забота о вашем здоровье
        </span>

        <span className="font-bold text-[#BFDBFE] text-6xl">
          {" "}
          с профессионалами
        </span>
        <span className="text-2xl text-[#DBEAFE]">
          Современная медицинская клиника с опытными врачами и{" "}
        </span>
        <span className="text-2xl text-[#DBEAFE]"> новейшим оборудованием</span>
        <div className="flex items-center justify-center gap-2">
          <AppButton
            text="Записаться на прием"
            variant="blue"
            icon={<FaRegCalendar className="size-7" />}
          />
          <AppButton
            text="Позвонить"
            variant="gray"
            icon={<FaPhoneAlt className="size-6" />}
          />
        </div>
      </div>
      <div className=" py-8 bg-[#F9FAFB] w-full ">
        <div className="flex flex-col gap-2 w-2/3  items-center justify-center mx-auto">
          <span className="font-bold text-3xl">Почему выбирают нас</span>
          <span className="text-2xl text-text-gray">
            Мы предоставляем качественные медицинские услуги с заботой{" "}
          </span>
          <span className="text-2xl text-text-gray">о каждом пациенте</span>
          <div className="flex items-center w-full justify-between gap-4 mt-8">
            <AboutCard
              title="Забота о здоровье"
              desc="Индивидуальный подход к каждому пациенту и комплексное лечение"
              icon={<FaRegHeart className="size-12 " />}
            />
            <AboutCard
              title="Опытные врачи"
              desc="Высококвалифицированные специалисты с большим опытом работы"
              icon={<FaUserFriends className="size-12 " />}
            />
            <AboutCard
              title="Современное оборудование"
              desc="Новейшее медицинское оборудование для точной диагностики"
              icon={<FaMedal className="size-12 " />}
            />
            <AboutCard
              title="Удобное расписание"
              desc="Гибкий график работы и онлайн-запись на прием"
              icon={<FaRegClock className="size-12 " />}
            />
          </div>
        </div>
      </div>
      <div className="flex py-8 flex-col gap-8 w-2/3  items-center justify-center mx-auto">
        <div className="flex flex-col gap-2 items-center justify-center mx-auto">
          <span className="font-bold text-3xl">Популярные услуги</span>
          <span className="text-text-gray  text-xl">
            Широкий спектр медицинских услуг для всей семьи
          </span>
        </div>
        <div className="flex items-center w-full  justify-between">
          {!isServicesLoading && services != undefined ? (
            services!
              .slice(0, 3)
              .map((service) => <ServiceCard service={service} />)
          ) : (
            <div>загрузка...</div>
          )}
        </div>
        <button className="flex py-2 px-4 items-center gap-2 border rounded-md border-[#D1D5DB] text-center">
          <span>Все услуги</span> <FaChevronRight className="size-3" />
        </button>
      </div>
      <div className=" py-12 bg-[#F9FAFB] w-full ">
        <div className="flex flex-col gap-4 w-2/3  items-center justify-center mx-auto">
          <span className="font-bold text-3xl">Наши врачи</span>
          <span className="text-2xl text-text-gray">
            Опытные специалисты с высокой квалификацией
          </span>

          <div className="flex items-center w-full gap-4 mt-6  justify-between">
            {!isDoctorsLoading && doctors != undefined ? (
              doctors!
                .reverse()
                .slice(0, 3)
                .map((doctor) => <DoctorCard doctor={doctor} />)
            ) : (
              <div>загрузка</div>
            )}
          </div>
        </div>
        <button className="flex py-2 px-4 items-center  gap-2 border rounded-md mx-auto mt-8 border-[#D1D5DB] text-center">
          <span>Все врачи</span> <FaChevronRight className="size-3" />
        </button>
      </div>
      {/**/}

      <div className=" py-12 bg-accent-blue w-full ">
        <div className="flex flex-col gap-10 w-2/3  items-center justify-center mx-auto text-white">
          <div className="flex flex-col gap-2 items-center justify-center ">
            {" "}
            <span className="font-bold text-3xl">Как записаться на прием</span>
            <span className="text-2xl text-white">
              Простой и удобный процесс записи за 3 шага
            </span>
          </div>

          <div className="flex items-center w-full justify-between">
            <div className="flex flex-col gap-4 text-center h-50 max-w-1/3">
              <div className="text-accent-blue  bg-white flex  flex-col rounded-full mx-auto size-12 justify-items-center text-center">
                <span className="transform translate-y-1/2 font-bold">1</span>
              </div>

              <span className="text-white font-bold text-lg">
                Выберите врача
              </span>
              <span className="text-[#DBEAFE]">
                Подберите специалиста по направлению и удобному времени
              </span>
            </div>
            <div className="flex flex-col gap-4 text-center h-50 max-w-1/3">
              <div className="text-accent-blue  bg-white flex  flex-col rounded-full mx-auto size-12 justify-items-center text-center">
                <span className="transform translate-y-1/2 font-bold">2</span>
              </div>

              <span className="text-white font-bold text-lg">
                Заполните форму
              </span>
              <span className="text-[#DBEAFE]">
                Укажите свои контактные данные и удобное время
              </span>
            </div>
            <div className="flex flex-col gap-4 text-center h-50 max-w-1/3">
              <div className="text-accent-blue  bg-white flex  flex-col rounded-full mx-auto size-12 justify-items-center text-center">
                <span className="transform translate-y-1/2 font-bold">3</span>
              </div>

              <span className="text-white font-bold text-lg">
                Приходите на прием
              </span>
              <span className="text-[#DBEAFE]">
                Получите подтверждение и приходите в назначенное время
              </span>
            </div>
          </div>
        </div>
        <button className="flex py-2 px-4 items-center gap-2 border rounded-md mx-auto mt-16 text-text-gray bg-white text-center">
          <FaRegCalendar className="size-3" />
          <span className="font-bold">Записаться сейчас</span>
        </button>
      </div>

      <div className=" py-12 w-full ">
        <div className="flex flex-col  gap-10 w-2/3  items-center  justify-center mx-auto">
          <div className="flex flex-col items-center gap-2">
            {" "}
            <span className="font-bold text-3xl">Отзывы наших пациентов</span>
            <span className="text-xl text-text-gray">
              Благодарные слова от людей, которым мы помогли
            </span>
          </div>
          <div className="flex gap-6 justify-between w-full items-center">
            <div className="flex flex-col gap-4 p-4 max-w-1/3 pr-6 bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded-md min-h-52 items-baseline">
              {" "}
              <div className="gap-2 flex text-[#FACC15]">
                <FaStar className="size-5" />
                <FaStar className="size-5" />
                <FaStar className="size-5" />
                <FaStar className="size-5" />
                <FaStar className="size-5" />
              </div>
              <p className="italic text-text-gray line-clamp-4">
                "Очень благодарна врачам клиники за профессионализм и
                внимательное отношение. Все объяснили доступно и назначили
                эффективное лечение."
              </p>
              <span className="font-bold text-lg">Мария Иванова</span>
            </div>
            <div className="flex flex-col gap-4 p-4 max-w-1/3 pr-6 bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded-md min-h-52 items-baseline">
              {" "}
              <div className="gap-2 flex text-[#FACC15]">
                <FaStar className="size-5" />
                <FaStar className="size-5" />
                <FaStar className="size-5" />
                <FaStar className="size-5" />
                <FaStar className="size-5" />
              </div>
              <p className="italic text-text-gray line-clamp-4">
                "Отличная клиника! Современное оборудование, квалифицированные
                специалисты. Записался онлайн, все быстро и удобно."
              </p>
              <span className="font-bold text-lg">Алексей Петров</span>
            </div>
            <div className="flex flex-col gap-4 p-4 max-w-1/3 pr-6 bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded-md min-h-52 items-baseline">
              {" "}
              <div className="gap-2 flex text-[#FACC15]">
                <FaStar className="size-5" />
                <FaStar className="size-5" />
                <FaStar className="size-5" />
                <FaStar className="size-5" />
                <FaStar className="size-5" />
              </div>
              <p className="italic text-text-gray line-clamp-4">
                "Долго искала хорошего педиатра для ребенка. В ККРИТ нашла
                отличного врача, который нашел подход к моему сыну."
              </p>
              <span className="font-bold text-lg">Елена Смирнова</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-12 w-full bg-[#F9FAFB]">
        <div className="flex flex-col  gap-10 w-2/3  items-center  justify-center mx-auto">
          <div className="flex flex-col items-center gap-2">
            {" "}
            <span className="font-bold text-3xl">Новости и акции</span>
            <span className="text-xl text-text-gray">
              Актуальная информация о жизни клиники
            </span>
          </div>
          <div className="flex gap-6  w-full items-center">
            <div className="flex flex-col min-w-1/3 gap-6 px-8  py-6 max-w-1/3  bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded-md min-h-52 items-baseline">
              {" "}
              <div className="flex justify-between items-center w-full">
                {" "}
                <div className="items-center text-accent-blue rounded-md px-4  flex bg-[#DBEAFE]">
                  Акции
                </div>
                <span className="text-text-gray">01.12.2025</span>
              </div>
              <span className="font-bold text-xl">
                Акция на диспансеризацию
              </span>
              <span className="text-text-gray text-sm">Акция месяца</span>
              <button className="flex py-2 px-4 items-center gap-2  border rounded-md  border-[#D1D5DB] text-center">
                <span>Читать далее</span> <FaChevronRight className="size-3" />
              </button>
            </div>
            <div className="flex flex-col min-w-1/3 gap-6 px-8  py-6 max-w-1/3  bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded-md min-h-52 items-baseline">
              {" "}
              <div className="flex justify-between items-center w-full">
                {" "}
                <div className="items-center text-accent-blue rounded-md px-4  flex bg-[#DBEAFE]">
                  Объявления
                </div>
                <span className="text-text-gray">01.12.2025</span>
              </div>
              <span className="font-bold text-xl">
                График работы в праздники
              </span>
              <span className="text-text-gray text-sm">Праздничный график</span>
              <button className="flex py-2 px-4 items-center gap-2  border rounded-md  border-[#D1D5DB] text-center">
                <span>Читать далее</span> <FaChevronRight className="size-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-12 w-full bg-accent-blue">
        <div className="flex flex-col  gap-6 w-2/3  items-center  justify-center mx-auto">
          <div className="flex flex-col items-center gap-4  max-w-2/5 text-center text-white">
            {" "}
            <span className="font-bold text-3xl ">Нужна консультация?</span>
            <p className="text-[#DBEAFE]">
              Свяжитесь с нами любым удобным способом и получите
              профессиональную консультацию
            </p>
          </div>

          <div className="flex items-center gap-4">
            <AppButton
              text="Записаться на прием"
              variant="gray"
              icon={<FaRegCalendar />}
            />
            <AppButton text="Позвонить" variant="gray" icon={<FaPhoneAlt />} />
            <AppButton
              text="Контакты"
              variant="gray"
              icon={<FaMapMarkerAlt />}
            />
          </div>
        </div>
      </div>
    </>
  );
};
