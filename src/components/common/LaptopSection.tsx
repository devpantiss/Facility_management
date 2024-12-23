import React from "react";
import LaptopOutline from "./LaptopOutline";

const LaptopSection: React.FC = () => {
  return (
    <div className="px-12 py-10 flex justify-center items-center bg-black gap-x-2">
      {/* Laptop */}
      <div className="relative">
        <LaptopOutline imgSrc="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734905391/Screenshot_2024-12-23_at_3.39.29_AM_ieyknf.png" />
      </div>
      {/* Phone */}
      <div className="relative transform -rotate-12">
        <div className="relative flex justify-center items-center h-[200px] w-[100px] border-4 border-green-600 rounded-2xl bg-gray-50 shadow-lg">
          <span className="absolute -right-2 top-14 border-4 border-green-600 h-7 rounded-md"></span>
          <span className="absolute -right-2 bottom-36 border-4 border-green-600 h-10 rounded-md"></span>
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734902840/Screenshot_2024-12-19_at_12.40.37_PM_vjht62.png"
            alt="Phone Content"
            className="rounded-xl h-[195px] w-full"
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default LaptopSection;
