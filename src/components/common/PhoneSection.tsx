import React from "react";
import PhoneOutline from "./PhoneOutline";

const PhoneSection: React.FC = () => {
  return (
    <div className="flex justify-center h-[500px] items-center bg-transparent py-10 relative overflow-hidden">
      {/* Rotating Dotted Orbital Circle */}
      <div className="absolute top-0 rounded-full border-[4px] border-dotted border-green-500 h-[450px] w-[450px] animate-spin-clockwise"></div>
      <div className="absolute top-6 rounded-full border-[4px] border-dotted border-green-500 h-[400px] w-[400px] animate-spin-anticlockwise"></div>

      {/* Center Phone */}
      <div className="z-10 relative">
        {/* Left Phone */}
        <div className="absolute -left-[100px] transform z-0 -rotate-3">
          <PhoneOutline imgSrc="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734902851/Screenshot_2024-12-19_at_12.40.53_PM_bpcyyo.png" />
        </div>
        {/* Right Phone */}
        <div className="absolute -right-[100px] transform z-0 rotate-3">
          <PhoneOutline imgSrc="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734773186/WhatsApp_Image_2024-12-19_at_12.45.19_PM_q9ae2m.jpg" />
        </div>
        <PhoneOutline imgSrc="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734902840/Screenshot_2024-12-19_at_12.40.37_PM_vjht62.png" />
      </div>
    </div>
  );
};

export default PhoneSection;
