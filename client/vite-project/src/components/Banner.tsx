import React from "react";

const AdBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl border border-blue-50 max-w-5xl mx-auto my-8 font-sans">
      {/* Фоновые декоративные круги */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full opacity-50"></div>
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-100 rounded-full opacity-30"></div>

      <div className="relative flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
        <div className="flex-1 text-center md:text-left space-y-4">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-[#24A1DE] text-sm font-bold rounded-full tracking-wide uppercase">
            Заботимся о вашем здоровье
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Запишитесь на прием в{" "}
            <span className="text-[#24A1DE]">ККРИТ Клинику</span> онлайн
          </h2>

          <p className="text-lg text-gray-600 max-w-md">
            Быстрая запись к врачу, напоминания в Telegram и бонусы за
            активность.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-[#24A1DE] hover:bg-[#1e87ba] text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-blue-200">
              Записаться сейчас
            </button>
            <div className="flex items-center gap-2 text-gray-500 font-medium px-4">
              <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
              Работаем круглосуточно
            </div>
          </div>

          {/* Блок с промокодом */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6 rounded-md shadow-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm3 1a1 1 0 10-2 0v3a1 1 0 102 0V8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-yellow-800">
                  Пройдите викторину в нашем Telegram-боте и получите промокод:
                  <strong className="text-yellow-900 ml-1">СКИБОБ 150</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Иконка больницы/аптеки */}
        <div className="flex-shrink-0 w-64 h-64 bg-blue-50 rounded-3xl flex items-center justify-center relative shadow-inner overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-32 h-32 text-[#24A1DE] opacity-80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
