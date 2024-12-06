import React from "react";

const Brands: React.FC = () => {

  return (
    <section className="bg-[#cffbff] py-12">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Trusted by <span className="font-bold">650+ Leading Brands</span> in
          India
        </h2>

        {/* Logos Grid */}
        <div className="flex justify-center p-4 mt-6 items-center">
          <img
            src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/clients-1.png?resize=1536%2C286&ssl=1"
            alt="brand"
            className="h-full grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Brands;
