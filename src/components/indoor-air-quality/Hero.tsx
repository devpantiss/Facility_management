import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-50 flex mt-10 items-center justify-center py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-center lg:text-left lg:max-w-xl">
          <h1 className="text-4xl lg:text-3xl font-bold leading-tight text-gray-900 mb-4">
            Invest in clean air, Invest in your future{" "}
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Indoor Air Quality solutions form SMC Integrated Facility Management
            promises healthy indoors using Commercial Ultraviolet Air Sanitizer.
            This technology harness the power of UV-C rays to alter the DNA of
            harmful bacteria, viruses, fungi and other harmful microorganisms
            that limit their spread and maintain IAQ in your premises.
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
              src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/indoor-air-quality-1.png?w=692&ssl=1"
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
