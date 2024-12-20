import React from "react";

const CommercialUV: React.FC = () => {
  return (
    <section className="bg-[#edf7f4] py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-6">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/iaq.png?w=540&ssl=1" // Replace with the actual image URL
            alt="Commercial UV Air Sanitizer"
            className="rounded-md"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
            Commercial UV Air Sanitizer for Maintaining Hygienic Indoor Air
            Quality for Offices & Commercial Space
          </h2>
          <p className="text-gray-600 text-lg">
            Energy Efficient Indoor Air Quality solutions from SMC Integrated
            Facility Management promise healthy indoors using Commercial
            Ultraviolet Air Sanitizer. This technology harnesses the power of
            UV-C rays to alter the DNA of harmful bacteria, viruses, fungi, and
            other harmful microorganisms that limit their spread and maintain
            IAQ in your premises.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommercialUV;
