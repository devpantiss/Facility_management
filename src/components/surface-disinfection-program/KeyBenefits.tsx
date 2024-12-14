import React from "react";

interface BenefitItem {
  id: number;
  title: string;
  description: string[];
  icon: string;
}

const benefits: BenefitItem[] = [
  {
    id: 1,
    title: "Save Time and Effort",
    description: ["Inventory on Wheels", "No wash/rinse – Duster/Mop"],
    icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ssdp-1.png?fit=50%2C50&ssl=1", // Replace with actual icon path
  },
  {
    id: 2,
    title: "Reduced Cross Contamination",
    description: [
      "Colour Coded Micro-Fiber Dusters",
      "One Room – One Mop",
    ],
    icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ssdp-2.png?fit=50%2C50&ssl=1",
  },
  {
    id: 3,
    title: "Improved Cleaning Standards",
    description: [
      "Micro-Fiber Dusters & Mops",
      "Improved Aesthetics of Cleaning Practices",
    ],
    icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ssdp-3.png?fit=50%2C50&ssl=1",
  },
  {
    id: 4,
    title: "Save Water",
    description: ["Pre-Soaked Mop Sleeves", "Pre-Soaked MF Dusters"],
    icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ssdp-4.png?fit=50%2C50&ssl=1",
  },
  {
    id: 5,
    title: "Improved Hygiene",
    description: [
      "Fresh Duster for each cleaning",
      "Disinfected & Laundered – Mop & Dusters",
    ],
    icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ssdp-5.png?fit=50%2C50&ssl=1",
  },
  {
    id: 6,
    title: "Staff Satisfaction",
    description: [
      "Less Fatigue to Janitors",
      "Sense of Pride using advanced tools",
    ],
    icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ssdp-6.png?fit=50%2C50&ssl=1",
  },
];

const KeyBenefits: React.FC = () => {
  return (
    <section className="text-center p-6 md:p-12 bg-gray-50">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-2">
        Key Benefits
      </h2>
      <p className="text-gray-600 mb-8">
        Why Choose Smart Surface Disinfection Program?
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="border border-yellow-300 p-6 rounded-lg bg-yellow-50 shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-12 h-12 object-contain"
              />
            </div>
            {/* Title */}
            <h3 className="font-medium text-lg mb-2">{benefit.title}</h3>
            {/* Description */}
            <ul className="text-gray-600 text-sm list-disc text-left list-inside">
              {benefit.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyBenefits;
