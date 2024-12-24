import React from "react";
import { FaBolt, FaShieldAlt, FaTools, FaClock } from "react-icons/fa";

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <FaBolt className="text-green-600 text-5xl mb-4" />,
      title: "Expert Technicians",
      description:
        "Our certified electricians bring years of experience to ensure safe and precise solutions for all electrical needs.",
    },
    {
      icon: <FaShieldAlt className="text-green-600 text-5xl mb-4" />,
      title: "Safety First",
      description:
        "We prioritize safety in every project, adhering to strict industry standards to protect your home and business.",
    },
    {
      icon: <FaTools className="text-green-600 text-5xl mb-4" />,
      title: "State-of-the-Art Tools",
      description:
        "We use advanced tools and technology to deliver efficient and high-quality services tailored to your requirements.",
    },
    {
      icon: <FaClock className="text-green-600 text-5xl mb-4" />,
      title: "24/7 Emergency Service",
      description:
        "Our team is available round-the-clock to handle urgent electrical issues and minimize downtime.",
    },
  ];

  return (
    <section className="bg-black py-16 px-8 md:px-12 lg:px-24 border-b-2 border-green-600">
      <h2 className="text-4xl font-bold text-center text-green-600 mb-8">
        Why Choose Us for Electrical Services?
      </h2>
      <p className="text-gray-200 text-center mb-12">
        Discover the advantages of partnering with us for all your electrical needs. We deliver quality, safety, and reliability every step of the way.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-transparent ring-2 ring-green-600 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            {benefit.icon}
            <h3 className="text-xl font-bold text-gray-300 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-200">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
