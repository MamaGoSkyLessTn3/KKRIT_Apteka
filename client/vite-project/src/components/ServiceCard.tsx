import {FaRegHeart} from "react-icons/fa";
import AppButton from "./AppButton.tsx";
import type {Service} from "../types/service.ts";

const ServiceCard = ({service}: { service: Service }) => {
    return (
        <div className='flex flex-col gap-2 p-4 justify-center w-1/3'>
            <div className='flex gap-2 items-center'>
                <div className='bg-[#DBEAFE] text-[#2563EB] p-2'><FaRegHeart/></div>
                <span>{type}</span>
            </div>
            <span className='font-bold text-xl'>{title}</span>
            <span className='text-[#4B5563]'>{description}</span>
            <div className='flex justify-between'>
                <span className='text-[#2563EB] font-bold'>{price} ₽</span>
                <span className='text-[#4B5563]'>{duration}</span>
            </div>
            <AppButton className='w-full' text='Записаться' variant='blue'/>
        </div>
    );
};

export default ServiceCard;