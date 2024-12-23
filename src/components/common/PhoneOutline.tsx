import React from "react";

interface PhoneOutlineProps {
  imgSrc: string;
}

const PhoneOutline: React.FC<PhoneOutlineProps> = ({ imgSrc }) => {
  return (
    <div className="relative flex justify-center items-center h-[300px] w-[160px] border-4 border-black rounded-2xl bg-gray-50 shadow-lg">
      <span
        className="absolute -right-2 top-14 border-4 border-black h-7 rounded-md"
      ></span>
      <span
        className="absolute -right-2 bottom-36 border-4 border-black h-10 rounded-md"
      ></span>
      <img
        src={imgSrc}
        alt="Phone Content"
        className="rounded-xl h-[295px] w-full"
      />
    </div>
  );
};

export default PhoneOutline;
