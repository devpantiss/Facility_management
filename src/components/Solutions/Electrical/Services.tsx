import React from "react";
import { FaLightbulb, FaPlug, FaTools, FaSolarPanel } from "react-icons/fa";

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaLightbulb className="text-green-600 text-5xl mb-4" />,
      title: "Lighting Installations",
      description:
        "Professional installation of indoor and outdoor lighting for homes, offices, and commercial spaces.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735033421/syed-hussaini-bJliZ7Eg9Cw-unsplash_kia3sr.jpg",
    },
    {
      icon: <FaPlug className="text-green-600 text-5xl mb-4" />,
      title: "Wiring and Rewiring",
      description:
        "Safe and efficient wiring and rewiring solutions to ensure optimal electrical performance.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735033423/jonathan-castaneda-2G68IgzG7Iw-unsplash_nwirqd.jpg",
    },
    {
      icon: <FaTools className="text-green-600 text-5xl mb-4" />,
      title: "Electrical Repairs",
      description:
        "Timely repair services for appliances, circuits, and other electrical components.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735033424/anton-savinov-aQxOYwG_GyI-unsplash_g68r3w.jpg",
    },
    {
      icon: <FaSolarPanel className="text-green-600 text-5xl mb-4" />,
      title: "Solar Panel Installation",
      description:
        "Sustainable solar panel solutions to reduce energy costs and promote eco-friendly practices.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735033423/benjamin-jopen-2SfssudtyIA-unsplash_dip7z9.jpg",
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
            We offer a wide range of reliable and professional electrical services for all your needs.
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
