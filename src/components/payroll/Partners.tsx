import React from "react";

const Partners: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-black p-4">
      <div className="text-center max-w-2xl">
        {/* Badge */}
        <div className="inline-block mb-4 px-4 py-2 bg-[#1A4F63] rounded-full text-[#D0E6F1] text-sm font-semibold">
          WashX PARTNERS
        </div>

        {/* Heading */}
        <h1 className="text-white text-3xl md:text-4xl font-semibold leading-tight mb-4">
          Automate your Client's Payroll & Compliance Payments
        </h1>

        {/* Subheading */}
        <p className="text-[#D0E6F1] text-lg mb-6">
          Join our partner program and expand your suite of services.
        </p>

        {/* Button */}
        <button className="bg-[#22C55E] text-white font-medium py-2 px-6 rounded-md hover:bg-[#1cae51] transition duration-300">
          Become a partner →
        </button>
      </div>
    </div>
  );
};

export default Partners;
