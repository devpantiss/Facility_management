import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-black flex mt-10 items-center justify-center py-16 border-b-2 border-green-600 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-center lg:text-left lg:max-w-xl">
          <h1 className="text-4xl lg:text-3xl font-bold leading-tight text-green-600 mb-4">
            MWFMS the Key to Smart, Proactive Operation Maintenance -{" "}
            <span className="whitespace-nowrap">360° Visibility</span> of
            Operation & Maintenance System
          </h1>
          <p className="text-white mb-6 leading-relaxed">
            Transition to an intelligent facility landscape with CMMS, tailored
            with digitization, aligning with the dynamic needs of both
            conventional and smart buildings.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
            Book a Demo
          </button>
        </div>

        {/* Right Section - Images */}
        <div className="relative mt-12 lg:mt-0 w-full lg:w-1/2 flex justify-center">
          {/* Laptop Image */}
          <div className="relative w-full">
            <img
              src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/card-3-1.png?w=879&ssl=1"
              alt="Laptop Dashboard"
              className="w-full h-auto drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
