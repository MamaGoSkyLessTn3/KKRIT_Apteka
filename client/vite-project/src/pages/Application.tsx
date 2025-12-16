import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import AppButton from "../components/AppButton.tsx";
import { useFetchEntities } from "../hooks/useFetchEntities.ts";
import { useEffect, useMemo, useState } from "react";
import type { Application, Doctor, Service } from "../types/service.ts";
import { createApplication } from "../api/services/fetch.ts";

const ApplicationPage = () => {
  const { doctors, services, isServicesLoading, isDoctorsLoading } =
    useFetchEntities();
  const [applicationState, setApplicationState] = useState<Application>({
    full_name: "",
    email: "",
    date_time: "",
    birthday: "",
    serviceId: "",
    doctorId: "",
    comment: "",
  });

  const [availableDoctors, setAvailableDoctors] = useState<Doctor[] | null>(
    null,
  );
  const [availableServices, setAvailableServices] = useState<Service[] | null>(
    null,
  );
  useEffect(() => {
    console.log({
      applicationState,
    });
  }, [applicationState]);
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

  const onSubmit = async () => {
    try {
      const { data } = await createApplication(applicationState);
      console.log(data);
    } catch (error) {
      console.log(error);
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
                onChange={(e) =>
                  setApplicationState({
                    ...applicationState,
                    doctorId: e.target.value,
                  })
                }
              >
                <option value="" disabled selected>
                  Выберите врача
                </option>
                {!isDoctorsLoading &&
                  availableDoctors !== null &&
                  availableDoctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.first_name +
                        " " +
                        doctor.middle_name +
                        " " +
                        doctor.last_name}
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
                <span className="font-bold">Выберите услугу</span>{" "}
              </label>
              <select
                id="service"
                className="
    bg-white px-4 py-2 border border-[#D1D5DB]
    rounded-lg w-full
    focus:outline-none
  "
                onChange={(e) =>
                  setApplicationState({
                    ...applicationState,
                    serviceId: e.target.value,
                  })
                }
              >
                <option value="" disabled selected>
                  Выберите услугу
                </option>
                {!isServicesLoading &&
                  availableServices !== null &&
                  availableServices.map((service) => (
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
                <span className="font-bold">Выберите дату и время *</span>{" "}
              </label>
              <input
                type="datetime-local"
                className="
    bg-white px-4 py-2 border border-[#D1D5DB]
    rounded-lg w-full
    focus:outline-none
  "
                onChange={(e) =>
                  setApplicationState({
                    ...applicationState,
                    date_time: e.target.value,
                  })
                }
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
                  onChange={(e) =>
                    setApplicationState({
                      ...applicationState,
                      full_name: e.target.value,
                    })
                  }
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
                  placeholder="Ваш Телефон"
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
                  placeholder="Ваша электронная почта"
                  onChange={(e) =>
                    setApplicationState({
                      ...applicationState,
                      email: e.target.value,
                    })
                  }
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
                  id="birthday"
                  type="date"
                  className="
    bg-white px-4 py-2 border border-[#D1D5DB]
    rounded-lg w-full
    focus:outline-none
  "
                  onChange={(e) =>
                    setApplicationState({
                      ...applicationState,
                      birthday: e.target.value,
                    })
                  }
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
      </div>
    </div>
  );
};

export default ApplicationPage;
