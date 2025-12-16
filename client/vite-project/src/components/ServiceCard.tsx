import {
  FaHandHoldingMedical,
  FaRegHeart,
  FaRegSmileWink,
} from "react-icons/fa";
import AppButton from "./AppButton.tsx";
import type { Service } from "../types/service.ts";

const ServiceCard = ({ service }: { service: Service }) => {
  const getServiceIcon = (type: string) => {
    switch (type) {
      case "Педиатр":
        return <FaRegSmileWink />;
      case "Кардиолог":
        return <FaRegHeart />;
      case "Терапевт":
        return <FaHandHoldingMedical />;
    }
  };

  return (
    <div className="flex flex-col gap-2  rounded-xl p-8   justify-between bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <div className="flex gap-2 items-center ">
        <div className="bg-[#DBEAFE] text-accent-blue p-2 rounded">
          {getServiceIcon(service.type)}
        </div>
        <span>{service.type}</span>
      </div>
      <p className="font-bold text-xl line-clamp-1">{service.title}</p>
      <span className="text-text-gray">{service.description}</span>
      <div className="flex justify-between">
        <span className="text-accent-blue font-bold">{service.price} ₽</span>
        <span className="text-text-gray">{service.duration}</span>
      </div>
      <AppButton className="w-full" text="Записаться" variant="blue" />
    </div>
  );
};

export default ServiceCard;
