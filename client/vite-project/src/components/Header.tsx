import {FaMapMarkerAlt, FaPhoneAlt, FaRegClock} from "react-icons/fa";
import {Link} from "react-router";

const Header = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div
                className='bg-[#EFF6FF] border-b-[#DBEAFE] text-[#4B5563] flex items-center w-full  py-4'>
                <div className='flex  w-2/3 mx-auto justify-between'>
                    <div className='flex items-center gap-6'>
                        <div className='flex  items-center gap-2'><FaPhoneAlt/> +7 (495) 123-45 67</div>
                        <div className='flex items-center justify-center gap-2'><FaRegClock/>
                            Пн-Пт: 8:00-20:00, Сб: 9:00-16:00
                        </div>
                        <div className='flex items-center justify-center gap-2'><FaMapMarkerAlt/>
                            г. Москва, ул. Ленина, 123
                        </div>
                    </div>
                    <div className='flex items-center justify-center font-semibold text-[#2563EB]'>ККРИТ Клиника</div>
                </div>

            </div>
            <div className='flex justify-between items-center mx-auto w-2/3'>
                <div className='flex gap-2 items-center'><span
                    className='text-white rounded-lg p-2 bg-[#2563EB]'>ККРИТ</span>
                    Клиника
                </div>
                <nav className='flex gap-14 items-center '>
                    <Link to='/' className='border-b-2 border-[#2563EB] text-[#2563EB]'>Главная</Link>
                    <Link to='/about' className='border-b-2 border-white'>О клинике</Link>
                    <Link to='/services' className='border-b-2 border-white'>Услуги</Link>
                    <Link to='/doctors' className='border-b-2 border-white'>Врачи</Link>
                    <Link to='/application' className='border-b-2 border-white'>Расписание</Link>
                    <Link to='/faq' className='border-b-2 border-white'>Пациентам</Link>
                    <Link to='/news ' className='border-b-2 border-white'>Новости</Link>
                    <Link to='/contacts' className='border-b-2 border-white'>Контакты</Link>
                </nav>

            </div>
        </div>

    );
};

export default Header;