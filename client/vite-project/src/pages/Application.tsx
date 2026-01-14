import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import AppButton from "../components/AppButton.tsx";
import { useFetchEntities } from "../hooks/useFetchEntities.ts";
import { useEffect, useState } from "react";
import type { Application, Doctor, Service } from "../types/service.ts";
import { createApplication } from "../api/services/fetch.ts";

const initialApplicationState = {
  full_name: "",
  email: "",
  date_time: "",
  birthday: "",
  serviceId: "",
  doctorId: "",
  comment: "",
};

const ApplicationPage = () => {
  const { doctors, services, isServicesLoading, isDoctorsLoading } =
    useFetchEntities();

  // --- НОВЫЕ СОСТОЯНИЯ (Чтобы не было белого экрана) ---
  const [isSuccess, setIsSuccess] = useState(false);
  const [createdAppId, setCreatedAppId] = useState<number | null>(null);

  const [applicationState, setApplicationState] = useState<Application>(
    initialApplicationState,
  );

  const [availableDoctors, setAvailableDoctors] = useState<Doctor[] | null>(
    null,
  );
  const [availableServices, setAvailableServices] = useState<Service[] | null>(
    null,
  );

  useEffect(() => {
    if (!isDoctorsLoading && !isServicesLoading) {
      setAvailableDoctors(doctors);
      setAvailableServices(services);
    }
  }, [isDoctorsLoading, isServicesLoading, doctors, services]);

  useEffect(() => {
    if (isDoctorsLoading || isServicesLoading) return;

    const currentDoctor = doctors.find(
      (doctor) => +doctor.id === +applicationState.doctorId,
    );
    const currentService = services.find(
      (service) => +service.id === +applicationState.serviceId,
    );

    if (applicationState.doctorId && currentDoctor) {
      setAvailableServices(
        services.filter((service) => service.type === currentDoctor.type),
      );
    } else {
      setAvailableServices(services);
    }

    if (applicationState.serviceId && currentService) {
      setAvailableDoctors(
        doctors.filter((doctor) => doctor.type === currentService.type),
      );
    } else {
      setAvailableDoctors(doctors);
    }
  }, [applicationState.doctorId, applicationState.serviceId]);

  // --- ОБНОВЛЕННЫЙ ONSUBMIT ---
  const onSubmit = async () => {
    try {
      const response = await createApplication(applicationState);
      console.log("Ответ сервера:", response.data);

      // Проверяем, пришел ли ID (зависит от твоего API, может быть response.data.id или response.id)
      const appId = response.data?.id || response.id;

      if (appId) {
        setCreatedAppId(appId);
        setIsSuccess(true); // Показываем экран успеха
      }

      setApplicationState(initialApplicationState);
    } catch (error) {
      console.error("Ошибка при отправке:", error);
    }
  };

  const canSend =
    applicationState.full_name &&
    applicationState.email &&
    applicationState.date_time &&
    applicationState.birthday &&
    applicationState.serviceId &&
    applicationState.doctorId &&
    applicationState.comment;

  return (
    <div>
      <div className="flex w-1/2 flex-col mx-auto items-center gap-4 py-12 text-text-gray">
        {isSuccess ? (
          /* --- ЭКРАН УСПЕХА --- */
          <div className="flex flex-col items-center gap-6 p-10 bg-white shadow-2xl rounded-2xl w-full">
            <div className="text-6xl text-green-500">✅</div>
            <span className="font-bold text-3xl text-center text-gray-800">
              Вы успешно записаны!
            </span>
            <p className="text-xl text-center text-gray-600">
              Номер вашей заявки:{" "}
              <span className="font-bold text-blue-500">#{createdAppId}</span>
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col items-center gap-4 w-full">
              <span className="text-center font-medium text-gray-700">
                Хотите получить напоминание о визите в <b>Telegram</b> за 24
                часа?
              </span>
              <a
                href={`https://t.me/kkrit_clinic_bot?start=${createdAppId}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-[#24A1DE] hover:bg-[#1e87ba] text-white px-10 py-3 rounded-full font-bold transition-all shadow-lg"
              >
                <span>Подключить уведомления</span>
              </a>
            </div>

            <button
              onClick={() => setIsSuccess(false)}
              className="text-gray-400 underline hover:text-gray-600 transition-colors mt-4"
            >
              Вернуться к заполнению новой формы
            </button>
          </div>
        ) : (
          /* --- ТВОЯ ФОРМА --- */
          <>
            <span className="font-bold text-3xl text-black">
              Запись на прием
            </span>
            <span className="text-xl text-black">
              Выберите врача, дату и время для записи на прием
            </span>
            <form className="grid-cols-2 grid gap-4 w-full">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 p-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-white rounded-lg">
                  <label
                    className="flex items-center gap-2 text-text-gray"
                    htmlFor="doctor"
                  >
                    <FaUser /> <span className="font-bold">Выберите врача</span>
                  </label>
                  <select
                    id="doctor"
                    className="bg-white px-4 py-2 border border-[#D1D5DB] rounded-lg w-full focus:outline-none text-black"
                    value={applicationState.doctorId}
                    onChange={(e) =>
                      setApplicationState({
                        ...applicationState,
                        doctorId: e.target.value,
                      })
                    }
                  >
                    <option value="">Выберите врача</option>
                    {!isDoctorsLoading &&
                      availableDoctors?.map((doctor) => (
                        <option key={doctor.id} value={doctor.id}>
                          {`${doctor.first_name} ${doctor.middle_name} ${doctor.last_name}`}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="flex flex-col gap-4 p-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-white rounded-lg">
                  <label
                    className="flex items-center gap-2 text-text-gray"
                    htmlFor="service"
                  >
                    <FaUser />{" "}
                    <span className="font-bold">Выберите услугу</span>
                  </label>
                  <select
                    id="service"
                    className="bg-white px-4 py-2 border border-[#D1D5DB] rounded-lg w-full focus:outline-none text-black"
                    value={applicationState.serviceId}
                    onChange={(e) =>
                      setApplicationState({
                        ...applicationState,
                        serviceId: e.target.value,
                      })
                    }
                  >
                    <option value="">Выберите услугу</option>
                    {!isServicesLoading &&
                      availableServices?.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="flex flex-col gap-4 p-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-white rounded-lg">
                  <label
                    className="flex items-center gap-2 text-text-gray"
                    htmlFor="date_time"
                  >
                    <FaUser />{" "}
                    <span className="font-bold">Выберите дату и время *</span>
                  </label>
                  <input
                    required
                    type="datetime-local"
                    className="bg-white px-4 py-2 border border-[#D1D5DB] rounded-lg w-full focus:outline-none text-black"
                    onChange={(e) => {
                      // .replace("T", " ") заменяет букву T на обычный пробел
                      const formattedDate = e.target.value.replace("T", " ");
                      setApplicationState({
                        ...applicationState,
                        date_time: formattedDate,
                      });
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-6 p-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-white rounded-lg">
                  <div className="flex items-center gap-2 font-bold text-black">
                    <FaUser className="text-accent-blue" />{" "}
                    <span>Ваши данные</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-black">Имя *</label>
                    <input
                      required
                      type="text"
                      placeholder="Ваше имя"
                      className="bg-white px-4 py-2 border border-[#D1D5DB] rounded-lg w-full text-black focus:outline-none"
                      onChange={(e) =>
                        setApplicationState({
                          ...applicationState,
                          full_name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-black">Телефон *</label>
                    <input
                      required
                      type="text"
                      placeholder="Ваш Телефон"
                      className="bg-white px-4 py-2 border border-[#D1D5DB] rounded-lg w-full text-black focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-black">Email</label>
                    <input
                      required
                      type="text"
                      placeholder="Ваша электронная почта"
                      className="bg-white px-4 py-2 border border-[#D1D5DB] rounded-lg w-full text-black focus:outline-none"
                      onChange={(e) =>
                        setApplicationState({
                          ...applicationState,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-black">
                      Дата рождения
                    </label>
                    <input
                      required
                      type="date"
                      className="bg-white px-4 py-2 border border-[#D1D5DB] rounded-lg w-full text-black focus:outline-none"
                      onChange={(e) =>
                        setApplicationState({
                          ...applicationState,
                          birthday: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="flex gap-2 items-center text-black font-bold">
                      <FaMessage className="size-4" /> <span>Сообщение *</span>
                    </label>
                    <textarea
                      className="border border-[#D1D5DB] p-4 rounded-lg resize-none text-black"
                      placeholder="Опишите ваш вопрос..."
                      rows={3}
                      onChange={(e) =>
                        setApplicationState({
                          ...applicationState,
                          comment: e.target.value,
                        })
                      }
                    />
                  </div>
                  <AppButton
                    onClick={onSubmit}
                    text="Записаться на прием"
                    type="button"
                    variant="blue"
                    disabled={!canSend}
                  />
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ApplicationPage;
