import React from "react";

const Brands: React.FC = () => {
  const logos = [
    {
      id: 1,
      src: "https://falconrealestate.in/wp-content/themes/fc/images/logo-icon-2.png",
      alt: "Falcon Real Estate",
    },
    {
      id: 2,
      src: "https://utkalbuilders.com/wp-content/uploads/2023/09/utkal-Logo.webp",
      alt: "Utkal Builders",
    },
    {
      id: 3,
      src: "http://www.vipulgroup.in/assets/images/logo.png",
      alt: "Vipul Group",
    },
    {
      id: 4,
      src: "https://www.tridentgalaxy.com/img/logo/logo.png",
      alt: "Trident Galaxy",
    },
    {
      id: 5,
      src: "https://www.springvillegreens.com/img/springville_green_logo.png",
      alt: "Springville",
    },
    {
      id: 6,
      src: "https://dnfairytale.com/wp-content/themes/fairytale/img/logo.png",
      alt: "DN Logo",
    },
    {
      id: 7,
      src: "https://motwaniconstructions.com/wp-content/uploads/2023/09/Motwani-Constructions-Logo.png",
      alt: "Motwani Constructions",
    },
    {
      id: 8,
      src: "https://wisdomtreebbsr.com/wp-content/uploads/2019/12/The-DN-Wisdom-New-Logo_2021-1-768x591.jpg",
      alt: "Wisdom Tree",
    },
    {
      id: 9,
      src: "https://admission.odmglobalschool.org/images/logo-2.png",
      alt: "ODM Global",
    },
    {
      id: 10,
      src: "https://odishavikash.com/img/VGI.png",
      alt: "Vikash Edu.",
    },
    {
      id: 11,
      src: "https://saiinternational.edu.in/wp-content/themes/ds-child/assets/images/brand/ftr-sai-logo.png",
      alt: "Sai International",
    },
    {
      id: 12,
      src: "http://www.dooninternational.in/wp-content/uploads/2015/07/doon-logo.png",
      alt: "Doon International",
    },
    {
      id: 13,
      src: "https://www.tpcentralodisha.com/images/logo.png",
      alt: "TPCODL",
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-green-600">
          Trusted by <span className="font-bold">45+ Leading Brands</span> in
          Odisha
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mt-6">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex justify-center items-center bg-transparent p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-16 grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
