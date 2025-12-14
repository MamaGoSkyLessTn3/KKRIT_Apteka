import AppButton from "../components/AppButton.tsx";
import {FaMedal, FaPhoneAlt, FaRegCalendar, FaRegClock, FaRegHeart, FaUserFriends} from "react-icons/fa";
import AboutCard from "../components/AboutCard.tsx";
import {useEffect} from "react";
import {fetchServices} from "../api/services/fetch.ts";


export const MainPage = () => {
    const getServices = async () => {
        try {
            console.log('start fetch');
            const response = await fetchServices();
            console.log('response', response);
            console.log('data', response.data);
        } catch (error) {
            console.error('REAL ERROR 👉', error);
        }
    }
    useEffect(() => {
        getServices();
    }, []);

    return (
        <>
            <div
                className='flex flex-col gap-4 mt-2 items-center text-center justify-center bg-linear-to-r from-[#2563EB] py-20 to-[#1E40AF]'>
            <span className='font-bold text-white text-6xl'>Забота о вашем здоровье
                 </span>

                <span className='font-bold text-[#BFDBFE] text-6xl'> с профессионалами</span>
                <span className='text-2xl text-[#DBEAFE]'>Современная медицинская клиника с опытными врачами и </span>
                <span className='text-2xl text-[#DBEAFE]'> новейшим оборудованием</span>
                <div className='flex items-center justify-center gap-2'>
                    <AppButton text='Записаться на прием' variant='blue' icon={<FaRegCalendar className='size-7'/>}/>
                    <AppButton text='Позвонить' variant='gray' icon={<FaPhoneAlt className='size-6'/>}/>
                </div>

            </div>
            <div className=' py-8 bg-[#F9FAFB] '>
                <div className='flex flex-col gap-2 w-2/3 items-center justify-center mx-auto'>
                    <span
                        className='font-bold text-3xl'>Почему выбирают нас</span>
                    <span
                        className='text-2xl text-[#4B5563]'>Мы предоставляем качественные медицинские услуги с заботой </span>
                    <span className='text-2xl text-[#4B5563]'>о каждом пациенте</span>
                    <div className='flex items-center justify-between gap-4 mt-8'>
                        <AboutCard title='Забота о здоровье'
                                   desc='Индивидуальный подход к каждому пациенту и комплексное лечение'
                                   icon={<FaRegHeart className='size-12 '/>}/>
                        <AboutCard title='Опытные врачи'
                                   desc='Высококвалифицированные специалисты с большим опытом работы'
                                   icon={<FaUserFriends className='size-12 '/>}/>
                        <AboutCard title='Современное оборудование'
                                   desc='Новейшее медицинское оборудование для точной диагностики'
                                   icon={<FaMedal className='size-12 '/>
                                   }/>
                        <AboutCard title='Удобное расписание' desc='Гибкий график работы и онлайн-запись на прием'
                                   icon={<FaRegClock className='size-12 '/>}/>
                    </div>
                </div>
            </div>
            <div className='flex py-8 flex-col gap-8 w-2/3 items-center justify-center mx-auto'>
                <div className='flex flex-col gap-2 items-center justify-center mx-auto'>
                    <span className='font-bold text-3xl'>Популярные услуги</span>
                    <span className='text-[#4B5563]  text-xl'>Широкий спектр медицинских услуг для всей семьи</span>
                </div>
                <div className='flex gap-4 justify-between'></div>
            </div>
        </>


    );
};

