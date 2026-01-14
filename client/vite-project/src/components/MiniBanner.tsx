import React from "react";

const MiniAdBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-4 rounded-xl shadow-md text-white flex items-center justify-between flex-wrap gap-4 font-sans max-w-2xl mx-auto my-6">
      <div className="flex items-center gap-3">
        <svg
          className="h-8 w-8 text-white opacity-80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.21a4.807 4.807 0 00-6.414 0L12 9.586l-1.172-1.172a4.807 4.807 0 00-6.414 0A4.807 4.807 0 002.382 11.5c.66.66 1.436 1.134 2.308 1.41L5 13.914l1.172 1.172a4.807 4.807 0 006.414 0L14 13.914l1.172-1.172a4.807 4.807 0 006.414 0A4.807 4.807 0 0021.618 11.5c-.66-.66-1.436-1.134-2.308-1.41z"
          />
        </svg>
        <span className="text-lg font-semibold">
          Запишитесь в ККРИТ Клинику ПЖ!
        </span>
      </div>

      <button className="px-5 py-2 bg-white text-blue-600 hover:bg-gray-100 font-bold rounded-lg shadow-sm transition-all transform hover:scale-105">
        Записаться
      </button>
    </div>
  );
};

export default MiniAdBanner;
