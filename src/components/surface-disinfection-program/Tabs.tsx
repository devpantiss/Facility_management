import React, { useState } from "react";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"gloGerm" | "atpMeter">("gloGerm");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Scientific Performance Proof
      </h2>

      {/* Tabs Header */}
      <div className="flex justify-center border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab("gloGerm")}
          className={`px-6 py-2 text-lg font-medium ${
            activeTab === "gloGerm"
              ? "text-white bg-green-600"
              : "text-gray-600 bg-gray-200"
          } rounded-t-md`}
        >
          Glo-Germ Test Technology
        </button>
        <button
          onClick={() => setActiveTab("atpMeter")}
          className={`px-6 py-2 text-lg font-medium ${
            activeTab === "atpMeter"
              ? "text-white bg-green-600"
              : "text-gray-600 bg-gray-200"
          } rounded-t-md`}
        >
          ATP Meter Test Technology
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-gray-50 p-6 rounded-md shadow-lg">
        {activeTab === "gloGerm" && (
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex gap-4 lg:w-1/2 w-full">
              {/* Image and Content */}
              <img
                src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ssdp-perfomance-1.png?w=577&ssl=1"
                alt="Glo Germ Kit"
                className="w-full"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Gel is applied before cleaning</li>
                <li>Supervisor inspects post cleaning</li>
                <li>UV torch is used to inspect</li>
                <li>Gel glows if disinfection is not done</li>
              </ul>
            </div>
          </div>
        )}
        {activeTab === "atpMeter" && (
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Image and Content */}
            <div className="flex gap-4 lg:w-1/2 w-full">
              <img
                src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ssdp-perfomance-2.png?w=597&ssl=1"
                alt="ATP Meter Step 1"
                className="w-full"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Measures actively growing micro-organisms</li>
                <li>The unit of measurement is “RLU – Relative Light Units”</li>
                <li>Higher RLU results in higher micro-organisms</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
