import { FaFilter } from "react-icons/fa";
import { useEffect, useState } from "react";
import type { Doctor } from "../types/service.ts";
import { fetchDoctors } from "../api/services/fetch.ts";
import DoctorCard from "../components/DoctorCard.tsx";

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isDoctorsLoading, setDoctorsLoading] = useState<boolean>(false);

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
    getDoctors();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 py-12 w-2/3 mx-auto">
      <span className="font-bold text-4xl">Медицинские услуги</span>
      <span className=" text-xl text-gray-800">
        Широкий спектр медицинских услуг для всей семьи
      </span>
      <div className="flex w-full   gap-4  mt-6 ">
        <div className="flex px-12 py-2 relative items-center self-start bg-white border border-[#D1D5DB] rounded-lg w-1/6">
          <FaFilter className="size-4 self-center  absolute transform  left-2  text-[#D1D5DB]" />
          <input
            type="text"
            placeholder="Все"
            className=" bg-white  w-full  border-white focus:outline-none  "
          />
        </div>
      </div>

      {/*  */}
      <div className="grid grid-cols-3 w-full mx-auto gap-4 mt-6  justify-between">
        {!isDoctorsLoading && doctors != undefined ? (
          doctors!.map((doctor) => <DoctorCard doctor={doctor} />)
        ) : (
          <div>загрузка</div>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;
