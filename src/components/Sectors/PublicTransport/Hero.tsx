import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="relative h-screen overflow-hidden text-white"
      style={{
        backgroundImage:
          "url('https://bsabt.odisha.gov.in//Upload/banner-images/be72ab29a1a14d04bac438fea925c0cb_20240229134852580.jpg')",
      }}
    >
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Seamless Facility Management for Public Transport Hubs
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Ensuring clean, safe, and efficient public transport environments for
          millions of daily commuters. We handle operations so you can focus on
          delivering smooth journeys every day.
        </p>

        <button className="px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-700 transition duration-300">
          Explore Our Services
        </button>
      </div>
    </div>
  );
};

export default Hero;