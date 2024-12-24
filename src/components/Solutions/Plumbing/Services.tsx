import React from "react";
import { FaWrench, FaToilet, FaWater } from "react-icons/fa";
import { PiPipeLight } from "react-icons/pi";

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaWrench className="text-green-600 text-5xl mb-4" />,
      title: "Leaky Faucet Repair",
      description:
        "Fixing dripping or malfunctioning faucets to save water and prevent inconvenience. Our skilled professionals ensure quick and reliable repairs for lasting results.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735029377/faucet_thvf0t.jpg",
    },
    {
      icon: <FaToilet className="text-green-600 text-5xl mb-4" />,
      title: "Toilet Repairs",
      description:
        "Resolving issues with flushing, leaks, or clogs in your toilets for smooth operation. We guarantee efficient and hygienic solutions for all your toilet-related problems.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735029990/99-films-48mTwDzizqE-unsplash_capcix.jpg",
    },
    {
      icon: <PiPipeLight className="text-green-600 text-5xl mb-4" />,
      title: "Pipe Installations",
      description:
        "Installing and maintaining water and sewer pipes for residential or commercial spaces. Our expertise ensures durable and leak-free piping systems.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735029991/zawaph-yem-pee-t4GdyZQ8UZ0-unsplash_e4zuxs.jpg",
    },
    {
      icon: <FaWater className="text-green-600 text-5xl mb-4" />,
      title: "Water Heater Services",
      description:
        "Repairing, installing, and maintaining water heaters to ensure a steady supply of hot water. Experience uninterrupted comfort with our trusted services.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735030215/Screenshot_2024-12-24_at_2.19.53_PM_yywcge.png",
    },
  ];

  return (
    <section className="bg-black py-12 border-b-2 border-green-600">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-green-600">
            Our Electrical Services
          </h2>
          <p className="text-white mt-2">
            We offer a wide range of reliable and professional electrical
            services for all your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center rounded-lg overflow-hidden group h-[500px]"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-80 group-hover:bg-opacity-10 transition-all duration-300 ease-in-out"></div>

              {/* Icon and Title on Hover */}
              <div className="absolute top-0 left-0 right-0 p-6 flex flex-col items-center justify-center transform group-hover:translate-y-[-100%] transition-all duration-300 ease-in-out">
                {service.icon}
                <h3 className="text-lg font-bold text-green-600 mt-2">
                  {service.title}
                </h3>
              </div>

              {/* Hidden Content on Hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                <h3 className="text-lg font-bold text-green-600">
                  {service.title}
                </h3>
                <p className="text-sm text-white mt-2">{service.description}</p>
                <button className="bg-green-500 text-white px-6 py-2 mt-4 rounded-lg shadow-lg hover:bg-green-600 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
