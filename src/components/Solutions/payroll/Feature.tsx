import React from "react";
import { FaCogs, FaMoneyCheckAlt, FaClock } from "react-icons/fa"; // Import icons

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FaCogs size={48} className="text-green-600"/>, // Automated Compliance Icon
    title: "Automated Compliance",
    description:
      "We're India's only payroll software that fully automates payment of TDS, PF, PT & ESIC, along with tax filing.",
  },
  {
    icon: <FaMoneyCheckAlt size={48} className="text-green-600"/>, // Salary Deposits Icon
    title: "Direct Salary Deposits",
    description:
      "Deposit salaries directly into employees’, freelancers or contractors bank accounts, instantly and accurately.",
  },
  {
    icon: <FaClock size={48} className="text-green-600"/>, // 1-Hour Onboarding Icon
    title: "1-Hour Onboarding",
    description:
      "Getting started with MoWashX Payroll is incredibly quick and easy thanks to a seamless plug and play design.",
  },
];

const Feature: React.FC = () => {
  return (
    <section className="bg-black border-t-2 border-green-600 py-12">
      <div className="container mx-auto px-6">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              <div className="mb-4">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-lg text-green-600 font-semibold mb-2">{feature.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
