import React from "react";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between">
      <div className="p-10">
        <h3 className="text-7xl font-bold mb-20">
          Prospective <br />
          <span className="text-gray-600">Customer</span> <br />
          Segmentation
        </h3>
        <p className="text-xl font-medium text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          distinctio nihil ab, quae quibusdam aperiam rerum nobis animi illo
          nostrum!
        </p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="94"
          height="94"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
        >
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      </div>
    </div>
  );
};

export default LeftContent;
