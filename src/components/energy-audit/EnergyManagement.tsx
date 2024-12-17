import React from "react";

const EnergyManagement: React.FC = () => {
  const features = [
    {
      title: "Scheduling of complete HVAC system operations",
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/eum.png?fit=63%2C63&ssl=1", // Replace with actual icon URL
    },
    {
      title: "EPI Benchmarking & Comparison",
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/eum-2.png?fit=63%2C63&ssl=1",
    },
    {
      title: "Fault Detection and Troubleshooting",
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/eum-3.png?fit=63%2C63&ssl=1",
    },
    {
      title: "Benchmarking Parameters & Generating Alert",
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/eum-4.png?fit=63%2C63&ssl=1",
    },
    {
      title: "Equipment Upkeep through PPM/AMC/RM",
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/eum-5.png?fit=64%2C64&ssl=1",
    },
    {
      title: "Fuel/Water Consumption Tracking",
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/eum-6.png?fit=61%2C63&ssl=1",
    },
    {
      title: "System Overheating/ Over Current Drawing Alert",
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/eum-7.png?fit=54%2C63&ssl=1",
    },
    {
      title: "Saving through Data Accuracy and Data Analysis",
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/eum-8.png?fit=63%2C63&ssl=1",
    },
  ];

  return (
    <section className="bg-[#F4F8FC] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Heading */}
        <div className="lg:col-span-4 text-left">
          <h2 className="text-3xl font-semibold text-black mb-4 leading-tight">
            Our Energy Management through CMMS
          </h2>
        </div>

        {/* Features */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-row lg:flex-col items-start gap-4 p-6 bg-transparent border border-[#E0E8F0] rounded-lg shadow-sm"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-8 h-8"
              />
              <p className="text-gray-700 font-medium">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnergyManagement;
