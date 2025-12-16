import {
  FaArrowRight,
  FaRegCalendar,
  FaRegClock,
  FaSearch,
  FaTag,
  FaUser,
} from "react-icons/fa";

const NewsPage = () => {
  return (
    <>
      <div className="flex bg-accent-blue   w-full py-16 mt-2">
        <div className="flex flex-col gap-4 w-2/3 items-center mx-auto ">
          <span className="font-bold text-5xl text-white">Новости клиники</span>
          <div className="flex  items-center text-center mx-auto max-w-2/3">
            <p className="text-xl text-[#DBEAFE] ">
              Актуальные новости, события и полезная информация о жизни клиники
              Ккрит
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/3 flex mx-auto justify-between items-center py-8">
        {" "}
        <div className="flex px-12 py-2 relative items-center bg-white border border-[#D1D5DB] rounded-lg  w-1/3">
          <FaSearch className="size-4 self-center  absolute transform  left-2  text-[#D1D5DB]" />
          <input
            type="text"
            placeholder="Поиск по новостям..."
            className=" bg-white placeholder:text-[#D1D5DB] w-full  border-white focus:outline-none  "
          />
        </div>{" "}
        <div className="flex gap-4 items-center">
          <div className="text-center rounded-4xl px-4 py-2 text-white font-bold bg-accent-blue">
            Все категории
          </div>
          <div className="text-center rounded-4xl px-4 py-2 text-[#374151] font-bold bg-[#F3F4F6]">
            Акции
          </div>
          <div className="text-center rounded-4xl px-4 py-2 text-[#374151] bg-[#F3F4F6] font-bold">
            Объявления
          </div>
        </div>
      </div>
      <div className="bg-[#F9FAFB] pt-12 pb-52 flex w-full">
        {" "}
        <div className="grid grid-cols-3 gap-6 w-2/3 mx-auto ">
          <div className="flex flex-col p-4 bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] gap-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaTag className="size-4 text-text-gray" />
                <span className="font-bold text-accent-blue text-sm">
                  Акции
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCalendar className="size-4 text-text-gray" />
                <span className=" text-text-gray">1 декабря 2025 г.</span>
              </div>
            </div>
            <span className="font-bold text-xl">Акция на диспансеризацию</span>
            <span className="text-text-gray ">
              Скидка на комплексное обследование...
            </span>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaUser className="size-4 text-text-gray" />
                <span className=" text-text-gray text-sm">Администрация</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegClock className="size-4 text-text-gray" />
                <span className="text-sm text-text-gray">5 мин</span>
              </div>
            </div>
            <button className="flex items-center gap-2 text-accent-blue font-bold text-xl">
              <span>Читать далее </span>
              <FaArrowRight />
            </button>
          </div>
          <div className="flex flex-col p-4 bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] gap-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaTag className="size-4 text-text-gray" />
                <span className="font-bold text-accent-blue text-sm">
                  Акции
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCalendar className="size-4 text-text-gray" />
                <span className=" text-text-gray">1 декабря 2025 г.</span>
              </div>
            </div>
            <span className="font-bold text-xl">График работы в праздники</span>
            <p className="text-text-gray line-clamp-1">
              Поликлиника работает по сокращённому графику...
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaUser className="size-4 text-text-gray" />
                <span className=" text-text-gray text-sm">Администрация</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegClock className="size-4 text-text-gray" />
                <span className="text-sm text-text-gray">5 мин</span>
              </div>
            </div>
            <button className="flex items-center gap-2 text-accent-blue font-bold text-xl">
              <span>Читать далее </span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
