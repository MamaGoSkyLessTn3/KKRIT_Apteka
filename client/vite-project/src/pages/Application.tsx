import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import AppButton from "../components/AppButton.tsx";

const ApplicationPage = () => {
  return (
    <div>
      <div className="flex w-1/2 flex-col mx-auto items-center gap-4 py-12 text-text-gray">
        <span className="font-bold text-3xl">Запись на прием</span>
        <span className="text-xl">
          Выберите врача, дату и время для записи на прием
        </span>
        <form className="grid-cols-2 grid gap-4 w-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 p-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-white rounded-lg">
              <label
                className="flex items-center gap-2 text-text-gray"
                htmlFor="doctor"
              >
                <FaUser />{" "}
                <span className="font-bold">Выберите врача</span>{" "}
              </label>
              <select
                id="doctor"
                className="
    bg-white px-4 py-2 border border-[#D1D5DB]
    rounded-lg w-full
    focus:outline-none
  "
              >
                <option value="" disabled selected>
                  Выберите врача
                </option>
                <option value="one">Вариант 1</option>
                <option value="two">Вариант 2</option>
                <option value="three">Вариант 3</option>
              </select>
            </div>
            <div className="flex flex-col gap-4 p-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-white rounded-lg">
              <label
                className="flex items-center gap-2 text-text-gray"
                htmlFor="service"
              >
                <FaUser />{" "}
                <span className="font-bold">Выберите услугу</span>{" "}
              </label>
              <select
                id="service"
                className="
    bg-white px-4 py-2 border border-[#D1D5DB]
    rounded-lg w-full
    focus:outline-none
  "
              >
                <option value="" disabled selected>
                  Выберите услугу
                </option>
                <option value="one">Вариант 1</option>
                <option value="two">Вариант 2</option>
                <option value="three">Вариант 3</option>
              </select>
            </div>
            <div className="flex flex-col gap-4 p-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-white rounded-lg">
              <label
                className="flex items-center gap-2 text-text-gray"
                htmlFor="date_time"
              >
                <FaUser />{" "}
                <span className="font-bold">Выберите дату и время *</span>{" "}
              </label>
              <input
                type="datetime-local"
                className="
    bg-white px-4 py-2 border border-[#D1D5DB]
    rounded-lg w-full
    focus:outline-none
  "
              />
            </div>
          </div>
          {/**/}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-6 p-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-white rounded-lg">
              <div className="flex items-center gap-2 font-bold">
                <FaUser className="text-accent-blue" />{" "}
                <span>Ваши данные</span>{" "}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="flex items-center gap-2 text-text-gray"
                  htmlFor="full_name"
                >
                  <span className="font-bold">Имя *</span>{" "}
                </label>
                <input
                  id="full_name"
                  type="text"
                  placeholder="Ваше имя"
                  className=" bg-white px-4 py-2 border  border-[#D1D5DB] rounded-lg w-full focus:outline-none  "
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="flex items-center gap-2 text-text-gray"
                  htmlFor="phone"
                >
                  <span className="font-bold">Телефон *</span>{" "}
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Ваше имя"
                  className=" bg-white px-4 py-2 border  border-[#D1D5DB] rounded-lg w-full focus:outline-none  "
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="flex items-center gap-2 text-text-gray"
                  htmlFor="email"
                >
                  <span className="font-bold">Email</span>{" "}
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Ваше имя"
                  className=" bg-white px-4 py-2 border  border-[#D1D5DB] rounded-lg w-full focus:outline-none  "
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="flex items-center gap-2 text-text-gray"
                  htmlFor="birthday"
                >
                  <span className="font-bold">Дата рождения</span>{" "}
                </label>
                <input
                  type="birthday"
                  className="
    bg-white px-4 py-2 border border-[#D1D5DB]
    rounded-lg w-full
    focus:outline-none
  "
                />
              </div>
              <div className="flex flex-col gap-2">
                {" "}
                <label
                  htmlFor="comment"
                  className="flex gap-2 items-center text-text-gray"
                >
                  <FaMessage className="size-4" />
                  <span className="font-bold">Сообщение *</span>
                </label>
                <textarea
                  id="comment"
                  className="border border-[#D1D5DB] p-4 rounded-lg resize-none"
                  placeholder="Опишите ваш вопрос или предложение..."
                  rows={3}
                />
              </div>
              <AppButton
                type="submit"
                text="Записаться на прием"
                variant="blue"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationPage;
