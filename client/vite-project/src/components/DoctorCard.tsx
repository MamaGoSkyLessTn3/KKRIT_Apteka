import AppButton from "./AppButton.tsx";
import type { Doctor } from "../types/service.ts";
import { getFirstTwoLetters } from "../utils/getFirstTwoLetters.ts";

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  const doctorFullName =
    doctor.first_name + " " + doctor.middle_name + " " + doctor.last_name;
  const fallBackText = getFirstTwoLetters(doctorFullName);
  return (
    <div className="flex flex-col gap-2  rounded-xl p-8 w-full  items-center bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <div className="flex gap-2 items-center ">
        <div className=" text-[#2563EB] p-2 rounded-full">
          {doctor.avatar ? (
            <img src={doctor.avatar} alt="" />
          ) : (
            <div className="items-center flex bg-[#2563EB] text-white rounded-full p-4">
              {fallBackText}
            </div>
          )}
        </div>
      </div>
      <span>{doctor.type}</span>
      <div className="font-bold text-xl w-60 text-center  text-ellipsis">
        <p className="">{doctorFullName}</p>
      </div>
      <span className="text-[#2563EB] font-bold text-center">
        {doctor.type}
      </span>
      <span className="text-[#4B5563] text-center">{doctor.experience}</span>
      <div className="text-[#4B5563] flex w-50 text-center line-clamp-2 overflow-hidden  ">
        <p className="text-[#4B5563] text-center line-clamp-2 overflow-hidden">
          {doctor.description}
        </p>
      </div>
      <AppButton className="w-full" text="Подробнее" variant="gray" />
    </div>
  );
};

export default DoctorCard;
