import * as React from "react";

const AboutCard = ({title, desc, icon}: { title: string, desc: string, icon: React.ReactNode }) => {
    return (

        <div
            className='flex flex-col gap-2 p-4 py-6 bg-white rounded-md items-center  text-center w-80  h-60 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]'>
            <div className='text-[#2563EB]'>{icon}</div>
            <span className='font-bold  text-2xl'>{title}</span>
            <span className='text-[#4B5563]'>{desc}</span>
        </div>

    );
};

export default AboutCard;