import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"gloGerm" | "atpMeter">("gloGerm");

  return (
    <div className="bg-black">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
          Scientific Performance Proof
        </h2>

        {/* Tabs Header */}
        <div className="flex justify-center border-b border-green-500 mb-8">
          <button
            onClick={() => setActiveTab("gloGerm")}
            className={`px-6 py-2 text-lg font-medium ${
              activeTab === "gloGerm"
                ? "text-white bg-green-600"
                : "text-white bg-transparent"
            } rounded-t-md`}
          >
            Glo-Germ Test Technology
          </button>
          <button
            onClick={() => setActiveTab("atpMeter")}
            className={`px-6 py-2 text-lg font-medium ${
              activeTab === "atpMeter"
                ? "text-white bg-green-600"
                : "text-white bg-transparent"
            } rounded-t-md`}
          >
            ATP Meter Test Technology
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-black p-6 rounded-md">
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
                  <li className="flex justify-start items-center">
                    <span className="text-green-600 mr-2 mt-2">
                      <FaCheckCircle />
                    </span>
                    <p className="text-white">Gel is applied before cleaning</p>
                  </li>
                  <li className="flex justify-start items-center">
                    <span className="text-green-600 mr-2 mt-2">
                      <FaCheckCircle />
                    </span>
                    <p className="text-white">
                      Supervisor inspects post cleaning
                    </p>
                  </li>
                  <li className="flex justify-start items-center">
                    <span className="text-green-600 mr-2 mt-2">
                      <FaCheckCircle />
                    </span>
                    <p className="text-white">UV torch is used to inspect</p>
                  </li>
                  <li className="flex justify-start items-center">
                    <span className="text-green-600 mr-2 mt-2">
                      <FaCheckCircle />
                    </span>
                    <p className="text-white">
                      Gel glows if disinfection is not done
                    </p>
                  </li>
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
                  <li className="flex justify-start items-center">
                    <span className="text-green-600 mr-2 mt-2">
                      <FaCheckCircle />
                    </span>
                    <p className="text-white">
                      Measures actively growing micro-organisms
                    </p>
                  </li>
                  <li className="flex justify-start items-center">
                    <span className="text-green-600 mr-2 mt-2">
                      <FaCheckCircle />
                    </span>
                    <p className="text-white">
                      The unit of measurement is “RLU – Relative Light Units”
                    </p>
                  </li>
                  <li className="flex justify-start items-center">
                    <span className="text-green-600 mr-2 mt-2">
                      <FaCheckCircle />
                    </span>
                    <p className="text-white">
                      Higher RLU results in higher micro-organisms
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
