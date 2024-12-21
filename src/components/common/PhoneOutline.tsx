import React from "react";

const PhoneOutline: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center h-[300px] w-[160px] border-4 border-black rounded-2xl bg-gray-50 shadow-lg">
      {/* Screen area */}
      <div className="absolute top-6 bottom-6 left-4 right-4 bg-white rounded-lg shadow-inner">
        <p className="text-center text-gray-400 text-sm mt-24">Screen Area</p>
      </div>

      {/* Top speaker */}
      <span className="absolute top-2 w-20 h-2 bg-black rounded-full"></span>

      {/* Right-side buttons */}
      <span className="absolute -right-2 top-16 border-2 border-black h-6 w-2 rounded-md bg-black"></span>
      <span className="absolute -right-2 top-32 border-2 border-black h-8 w-2 rounded-md bg-black"></span>
    </div>
  );
};

export default PhoneOutline;
