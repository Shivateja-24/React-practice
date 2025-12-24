import React from "react";

const RightCardContent = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white rounded-full flex justify-center items-center text-black h-12 w-12 font-bold">
        1
      </h2>
      <div>
        <p className="text-xl text-white mb-14 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam
          expedita explicabo! Provident incidunt molestias culpa numquam
          veritatis.
        </p>
        <div className="flex items-center justify-between">
          <button className="bg-blue-600 text-white font-medium px-7 py-3 rounded-full">
            Satisfied
          </button>
          <button className="bg-blue-600 text-white font-semibold px-3 py-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
