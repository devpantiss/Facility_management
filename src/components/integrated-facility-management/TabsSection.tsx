import React, { useState } from "react";

interface TabContent {
  title: string;
  content: React.ReactNode;
}

const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs: TabContent[] = [
    {
      title: "MWFMS",
      content: (
        <div className="flex items-center justify-center gap-8 flex-col md:flex-row">
          <img
            src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/cmms-1.png?w=879&ssl=1"
            alt="CMMS Platform"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-2xl text-green-600 font-semibold mb-4">
              Future-proof your Facility
            </h2>
            <p className="text-white mb-6">
              Future-proof your Facility with our CMMS Platform. The platform
              delivers smart facilities experience for everyone interacting with
              a building, in real-time contributing great towards saving on
              Man/Material/Capex/Opex and even more on Energy savings and Energy
              Management.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Energy Audit & Maintenance",
      content: (
        <div className="flex items-center justify-center gap-8 flex-col md:flex-row">
          <img
            src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/Energy-Audit-Maintenance-hero-img.png?w=581&ssl=1"
            alt="Energy Audit"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-2xl text-green-600 font-semibold mb-4">
              Enhance Your Energy Maintenance
            </h2>
            <p className="text-white mb-6">
              Enhance your Energy Maintenance with Tech-based solutions,
              suggesting solutions on ROI, projecting supervision or execution
              resulting for result evaluation.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Electrical Maintenance",
      content: (
        <div className="flex items-center justify-center gap-8 flex-col md:flex-row">
          <img
            src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/Service.png?w=504&ssl=1"
            alt="Electrical Maintenance"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-2xl text-green-600 font-semibold mb-4">
              Electrical Maintenance Expertise
            </h2>
            <p className="text-white mb-6">
              SMC Integrated Facility Management Solutions Limited Engineering
              squad has an inhouse OHSAS & ISO compliant expertise on Projects
              of Electrical erecting/commissioning/validation, Energy
              Audits/PQA/Thermal Imaging/Earth Test etc.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-black">
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-4xl text-center text-green-600 font-bold mb-8">Our Solutions</h2>
        <div className="flex border-b border-green-600">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-3 px-6 text-sm md:text-lg font-medium focus:outline-none transition-colors duration-300 ${
                activeTab === index
                  ? "text-green-600 border-b-4 border-green-600"
                  : "text-white hover:text-gray-800"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="mt-6">{tabs[activeTab].content}</div>
      </section>
    </div>
  );
};

export default TabsSection;
