import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="pt-24 relative border-b-2 border-green-600 bg-black bg-cover bg-center h-full lg:h-[90vh] bg-no-repeat p-8 md:p-12 md:pt-24 flex flex-col md:flex-row items-center">
      {/* Content */}
      <div className="relative md:w-1/2 mb-8 md:mb-0 z-10">
        <h2 className="text-6xl font-bold text-green-600 mb-6">
          Reliable Plumbing Services by Certified Experts
        </h2>
        <p className="text-gray-100 mb-6 text-lg">
          Experience top-notch plumbing solutions tailored to your needs. From
          emergency repairs to full-scale installations, our certified
          professionals ensure quality and reliability.
        </p>
        <p className="text-gray-100 text-lg">
          Whether it's a leaky faucet or a complex pipeline project, we've got
          you covered. Trust us to handle your plumbing issues efficiently and
          affordably.
        </p>

        {/* Call to Action */}
        <div className="mt-8">
          <a
            href="/services/plumbing"
            className="inline-block bg-green-600 text-white font-bold text-lg px-6 py-3 rounded-md hover:bg-green-500 transition duration-300"
          >
            Explore Our Services
          </a>
          <a
            href="/contact-us"
            className="inline-block ml-4 text-green-600 font-bold text-lg px-6 py-3 border-2 border-green-600 rounded-md hover:bg-green-600 hover:text-white transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Right Images */}
      <div className="relative md:w-1/2 flex flex-col gap-6 justify-center items-center z-10">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734782652/national-cancer-institute-eR5-JoSw1Mo-unsplash_zoszbp.jpg"
          alt="Plumbing tools and equipment"
          className="rounded-lg shadow-lg h-[600px]"
        />
      </div>
    </section>
  );
};

export default Hero;
