import React from "react";
import { FaBolt } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="pt-24 relative border-b-2 border-green-600 bg-black bg-cover bg-center h-full lg:h-[90vh] bg-no-repeat p-8 md:p-12 md:pt-24 flex flex-col md:flex-row items-center">
      {/* Content */}
      <div className="relative md:w-1/2 mb-8 md:mb-0 z-10">
        <h2 className="text-6xl font-bold text-green-600 mb-4 flex items-center">
          <FaBolt className="mr-3" /> Reliable Electrical Services
        </h2>
        <p className="text-white mb-6">
          Experience professional electrical solutions tailored to your home and business needs. Our certified electricians ensure safety and efficiency for all your electrical requirements.
        </p>
        <p className="text-white">
          From installations to repairs, we prioritize quality, precision, and customer satisfaction. Let us power your world with dependable and innovative solutions.
        </p>

        {/* Info Cards */}
        <div className="mt-8 flex flex-col md:flex-row gap-6">
          <div className="bg-transparent ring-2 ring-green-600 shadow-md text-center p-6 rounded-lg">
            <p className="text-3xl font-bold text-green-600">24/7 Support</p>
            <p className="text-gray-200">Round-the-clock assistance</p>
          </div>
          <div className="bg-transparent ring-2 ring-green-600 shadow-md text-center p-6 rounded-lg">
            <p className="text-3xl font-bold text-green-600">100%</p>
            <p className="text-gray-200">Satisfaction Guarantee</p>
          </div>
        </div>
      </div>

      {/* Right Images */}
      <div className="relative md:w-1/2 flex flex-col md:flex-row gap-4 justify-center items-center z-10">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734770616/Untitled_design_4_zzfu5e.png"
          alt="Electrical services"
          className="rounded-lg w-[600px]"
        />
      </div>
    </section>
  );
};

export default Hero;
