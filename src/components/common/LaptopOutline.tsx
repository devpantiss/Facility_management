import React from "react";

interface LaptopOutlineProps {
  imgSrc: string;
}

const LaptopOutline: React.FC<LaptopOutlineProps> = ({ imgSrc }) => {
  return (
    <div className="relative flex flex-col justify-center items-center h-[200px] w-[300px] border-4 border-green-600 bg-black rounded-md shadow-lg">
      {/* Screen */}
      <div className="h-full w-full bg-black rounded-t-md overflow-hidden">
        <img
          src={imgSrc}
          alt="Laptop Content"
          className="h-full w-full object-fit"
        />
      </div>
      {/* Base */}
      {/* <div className="h-[40px] w-[280px] bg-gray-200 border-t-4 border-black rounded-b-md flex items-center justify-center">
        <div className="h-[4px] w-[40px] bg-black rounded"></div>
      </div> */}
      {/* Stand */}
      <div className="absolute bottom-[-10px] h-[12px] w-[350px] bg-green-600 rounded-full"></div>
    </div>
  );
};

export default LaptopOutline;
