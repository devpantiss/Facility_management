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
        "Reliable plumbing services for efficient water flow and timely repairs.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734770616/Untitled_design_5_u9iyea.png",
    },
    {
      icon: <GiVacuumCleaner className="text-green-600 text-5xl mb-4" />,
      title: "SAFELY MANAGED SANITATION",
      description:
        "Innovative sanitation solutions for waste collection and eco-friendly disposal.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734772377/Untitled_design_7_naovrb.png",
    },
    {
      icon: <FaPlug className="text-green-600 text-5xl mb-4" />,
      title: "ELECTRICIAN",
      description:
        "Safe electrical installation, maintenance, and repair for optimal performance.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734770616/Untitled_design_4_zzfu5e.png",
    },
    {
      icon: <GiHighGrass className="text-green-600 text-5xl mb-4" />,
      title: "LANDSCAPING",
      description:
        "Transforming outdoor spaces with expert design and sustainable maintenance.",
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

export default Poster;
