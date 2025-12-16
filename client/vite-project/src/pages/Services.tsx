import { FaFilter, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import type { Service } from "../types/service.ts";
import { fetchServices } from "../api/services/fetch.ts";
import ServiceCard from "../components/ServiceCard.tsx";

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isServicesLoading, setServicesLoading] = useState<boolean>(false);

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

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 py-12 w-2/3 mx-auto">
      <span className="font-bold text-4xl">Медицинские услуги</span>
      <span className=" text-xl text-gray-800">
        Широкий спектр медицинских услуг для всей семьи
      </span>
      <div className="flex items-center w-full mx-auto justify-between  gap-4  mt-6 ">
        <div className="flex px-12 py-2 relative items-center bg-white border border-[#D1D5DB] rounded-lg mx-auto w-4/6">
          <FaSearch className="size-4 self-center  absolute transform  left-2  text-[#D1D5DB]" />
          <input
            type="text"
            placeholder="Поиск услуг..."
            className=" bg-white placeholder:text-[#D1D5DB] w-full  border-white focus:outline-none  "
          />
        </div>
        <div className="flex px-12 py-2 relative items-center bg-white border border-[#D1D5DB] rounded-lg mx-auto flex-1">
          <FaFilter className="size-4 self-center  absolute transform  left-2  text-[#D1D5DB]" />
          <input
            type="text"
            placeholder="Все"
            className=" bg-white  w-full  border-white focus:outline-none  "
          />
        </div>
      </div>

      {/*  */}
      <div className="grid grid-cols-3 items-center w-full  gap-2 justify-between">
        {!isServicesLoading && services != undefined ? (
          services!.map((service) => <ServiceCard service={service} />)
        ) : (
          <div>загрузка...</div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
