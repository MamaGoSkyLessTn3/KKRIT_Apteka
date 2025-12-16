import {
  FaMedal,
  FaRegCalendar,
  FaRegHeart,
  FaUserFriends,
} from "react-icons/fa";
import AppButton from "../components/AppButton.tsx";

const AboutPage = () => {
  return (
    <>
      <div className="flex bg-linear-to-r from-accent-blue  to-[#1E40AF] w-full py-16 mt-2">
        <div className="flex flex-col gap-4 w-2/3 items-center mx-auto ">
          <span className="font-bold text-5xl text-white">
            О поликлинике ККРИТ
          </span>
          <div className="flex  items-center text-center mx-auto max-w-2/3">
            <p className="text-xl text-[#DBEAFE] ">
              Современная медицинская клиника с многолетним опытом работы и
              высокими стандартами качества обслуживания
            </p>
          </div>
        </div>
      </div>
      {/**/}
      <div className="flex gap-8 w-2/3 items-center justify-between mx-auto py-16">
        <div className="flex flex-col w-1/2 gap-6 ">
          <span className="font-bold text-3xl ">Кто мы</span>
          <p className="text-xl text-text-gray ">
            Поликлиника ККРИТ - это современное медицинское учреждение,
            предоставляющее широкий спектр медицинских услуг для всей семьи. Мы
            работаем с 2010 года и за это время завоевали доверие тысяч
            пациентов.
          </p>
          <p className="text-xl text-text-gray ">
            Наша миссия - обеспечить каждому пациенту доступное, качественное и
            своевременное медицинское обслуживание с использованием современных
            технологий и методов лечения.
          </p>
          <div className="flex items-center gap-30 mx-auto ">
            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-col gap-2 items-center ">
                <span className="text-accent-blue text-3xl">14</span>
                <span className="text-lg">Лет работы</span>
              </div>
              <div className="flex flex-col gap-2 items-center ">
                <span className="text-accent-blue text-3xl">15000+</span>
                <span className="text-lg">Пациентов</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-col gap-2 items-center ">
                <span className="text-accent-blue text-3xl">50+</span>
                <span className="text-lg">Специалистов</span>
              </div>
              <div className="flex flex-col gap-2 items-center ">
                <span className="text-accent-blue text-3xl">95%</span>
                <span className="text-lg">Довольных пациентов</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center">
          <img className="w-full" src="/about.png" alt="" />
        </div>
      </div>
      {/*  */}
      <div className="flex bg-[#F9FAFB]  py-12">
        <div className="flex gap-4 flex-col mx-auto items-center w-2/3">
          <span className=" text-[#111827] font-bold text-3xl">
            Наши принципы
          </span>
          <span className="text-text-gray ">
            Основные ценности, которых мы придерживаемся в нашей работе
          </span>
          {/**/}
          <div className=" flex gap-4 w-full justify-between items-center mt-2">
            <div className="flex flex-col px-16 py-4 gap-4  w-1/2 bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded-lg relative">
              <FaRegHeart className="text-accent-blue size-6 absolute left-5 top-5" />
              <span className="font-bold text-xl">
                Пациентоориентированность
              </span>
              <p className=" text-gray">
                Каждый пациент для нас - уникальная личность, требующая
                индивидуального подхода
              </p>
            </div>
            <div className="flex flex-col px-16 py-4 gap-4  w-1/2 bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded-lg relative">
              <FaMedal className="text-accent-blue size-6 absolute left-5 top-5" />
              <span className="font-bold text-xl">Профессионализм</span>
              <p className=" text-gray">
                Высокая квалификация врачей и постоянное повышение
                профессионального уровня
              </p>
            </div>
          </div>
          <div className=" flex gap-4 w-full justify-between items-center">
            <div className="flex flex-col px-16 py-4 gap-4   w-1/2 bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded-lg relative">
              <FaUserFriends className="text-accent-blue size-6 absolute left-5 top-5" />
              <span className="font-bold text-xl">Командный подход</span>
              <p className=" text-gray">
                Совместная работа специалистов различных направлений для
                достижения наилучших результатов
              </p>
            </div>
            <div className="flex flex-col px-16 py-4 gap-4   w-1/2 h-full bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded-lg relative">
              <FaRegCalendar className="text-accent-blue size-6 absolute left-5 top-5" />
              <span className="font-bold text-xl">Доступность</span>
              <p className=" text-gray">
                Гибкий график работы и удобная система записи на прием
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-12 w-full bg-accent-blue">
        <div className="flex flex-col  gap-6 w-2/3  items-center  justify-center mx-auto">
          <div className="flex flex-col items-center gap-4  max-w-2/5 text-center text-white">
            {" "}
            <span className="font-bold text-3xl ">
              Готовы начать заботиться о своем здоровье?
            </span>
            <p className="text-[#DBEAFE]">
              Запишитесь на прием к нашим специалистам и получите качественную
              медицинскую помощь
            </p>
          </div>

          <div className="flex items-center gap-4">
            <AppButton text="Записаться на прием" variant="gray" />
            <AppButton text="Контакты" variant="gray" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
