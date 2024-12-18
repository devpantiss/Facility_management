import React from "react";
import KeyBenefitSlider from "./KeyBenefitSlider";

const KeyBenefitSection: React.FC = () => {
  const slides = [
    {
      image:
        "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ifm-1.png?fit=50%2C50&ssl=1",
      title: "High Productivity",
    },
    {
      image:
        "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ifm-2.png?fit=50%2C50&ssl=1",
      title: "Inclusive Annual Maintainance",
    },
    {
      image:
        "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ifm-3.png?fit=50%2C50&ssl=1",
      title: "High ROI",
    },
    {
      image:
        "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ifm-4.png?fit=50%2C50&ssl=1",
      title: "Energy Audit and Maintenance",
    },
    {
      image:
        "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ifm-5.png?fit=50%2C50&ssl=1",
      title: "CMMS Model",
    },
  ];
  return (
    <div className="flex bg-black flex-col items-center justify-center px-4 py-6">
      <div>
        <h2 className="text-4xl font-bold text-green-600">
          Our Computerised Maintenance Management System
        </h2>
      </div>
      <KeyBenefitSlider slides={slides} />
    </div>
  );
};

export default KeyBenefitSection;
