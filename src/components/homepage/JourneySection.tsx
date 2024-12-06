import React from "react";

const JourneySection: React.FC = () => {
  return (
    <div className="relative bg-teal-700 text-white py-12 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content Section */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Start Your <br /> Transformation Journey Now!
        </h2>
        <p className="text-lg font-medium mt-4">
          Take our free Facilities Management Maturity Assessment today and
          discover the potential for significant cost savings in your facility
          operations!
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-teal-800 font-bold rounded shadow hover:bg-yellow-300 transition">
          Book a free consultation
        </button>
      </div>

      {/* Right Image Section */}
      <div className="mt-8 md:mt-0 md:ml-12 w-full md:w-1/2 lg:w-2/5">
        <img
          src="https://i0.wp.com/smc-india.com/wp-content/uploads/2024/01/cta-img-2-1.png?w=830&ssl=1" // Replace with the actual group image path
          alt="Facility Management Team"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default JourneySection;
