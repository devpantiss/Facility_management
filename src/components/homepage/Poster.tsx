import React from "react";
import { FaPlug } from "react-icons/fa";
import { PiPipeLight } from "react-icons/pi";
import { GiVacuumCleaner } from "react-icons/gi";
import { GiHighGrass } from "react-icons/gi";

const Poster: React.FC = () => {
  const cards = [
    {
      icon: <PiPipeLight className="text-green-600 text-5xl mb-4" />,
      title: "PLUMBING",
      description:
        "We provide reliable plumbing services with skilled professionals and advanced tools, ensuring efficient water flow, timely repairs, and sustainable solutions. Our expertise guarantees minimal disruptions and optimized system performance for homes and businesses alike.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734770616/Untitled_design_5_u9iyea.png",
    },
    {
      icon: <GiVacuumCleaner className="text-green-600 text-5xl mb-4" />,
      title: "SAFELY MANAGED SANITATION",
      description:
        "We deliver innovative sanitation services, ensuring efficient waste collection, precise segregation, and eco-friendly disposal. Our sustainable approach minimizes environmental impact, enhances cleanliness, and promotes community health, combining advanced technology with best practices for a cleaner, greener future.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734772377/Untitled_design_7_naovrb.png",
    },
    {
      icon: <FaPlug className="text-green-600 text-5xl mb-4" />,
      title: "ELECTRICIAN",
      description:
        "We provide reliable electrical services, offering safe installation, maintenance, and repair solutions. Our skilled team ensures optimal performance of electrical systems, prioritizing safety and efficiency. With advanced technology and expert service, we enhance reliability and minimize downtime for a seamless experience.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734770616/Untitled_design_4_zzfu5e.png",
    },
    {
      icon: <GiHighGrass className="text-green-600 text-5xl mb-4" />,
      title: "LANDSCAPING",
      description:
        "Our landscaping services transform outdoor spaces through expert design, maintenance, and sustainable practices. From planting to irrigation and regular upkeep, we enhance the beauty and functionality of your surroundings, creating healthy, vibrant environments that promote well-being and ecological balance.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734770616/Untitled_design_6_msx3a6.png",
    },
  ];

  return (
    <section className="bg-black py-12 border-b-2 border-green-600">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-green-600">
            Streamline, Innovate & Optimize for Superior Facility Management
          </h2>
          <p className="text-white mt-2">
            As a problem-solving company, our award-winning technology and
            productivity framework deliver efficiency and cost savings.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((service, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center rounded-lg overflow-hidden group h-[500px]"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-80 group-hover:bg-opacity-70 transition-all duration-300 ease-in-out"></div>

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

export default Poster;
