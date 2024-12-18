import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-black border-b-2 border-green-600 flex mt-10 items-center justify-center py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-center lg:text-left lg:max-w-xl">
          <h1 className="text-4xl lg:text-3xl font-bold leading-tight text-green-600 mb-4">
            Experience the difference with SSDP, a proven program delivering
            infection prevention & cross contamination control.
          </h1>
          <p className="text-white mb-6 leading-relaxed">
            SMC Integrated Facility Management Solutions Limited brings a
            specialized Smart Surface Disinfection Program (SSDP) powered by
            innovative management practices & groundbreaking technology. We
            substitute the traditional mop and bucket approach with intelligent
            resources planning leading to a standardized Facility Management
            outcome. Our program prioritizes Infection Control &
            Cross-Contamination with 5Ms- Man, Machine, Method, Measure &
            Material.
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
              src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/ssdp.png?resize=768%2C534&ssl=1"
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
