import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-black border-b-2 border-green-600 flex mt-10 items-center justify-center py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-center lg:text-left lg:max-w-xl">
          <h1 className="text-4xl lg:text-3xl font-bold leading-tight text-green-600 mb-4">
            Optimize Your Energy Cost and Asset Life Cycle with Energy Efficient
            Facility Management Solutions{" "}
            <span className="whitespace-nowrap">360° Visibility</span> of
          </h1>
          <p className="text-white mb-6 leading-relaxed">
            Energy is one of the biggest costs for any infrastructure. If
            equipment maintenance and Energy audits is not done as a routine, it
            will add high maintenance costs and drastically reduce lifespan of
            the system. IOT-backed Energy Audits and MWFMS enabled Maintenance
            Programmes to ensure over 20% reduction in your energy and
            maintenance cost.
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
              src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/Energy-Audit-Maintenance-hero-img.png?w=581&ssl=1"
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
