import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white mx-auto flex justify-between items-center shadow-md fixed top-0 w-full z-50 px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://i0.wp.com/smc-india.com/wp-content/uploads/2024/03/SMC-Logoweb.png?fit=500%2C265&ssl=1"
          alt="Logo"
          className="h-10"
        />
      </div>

      {/* Navigation Menu */}
      <nav className="flex items-center space-x-6">
        {/* Company Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("sector")}
            className="flex items-center text-gray-700 hover:text-green-600 font-medium"
          >
            Sectors <FaChevronDown className="ml-1" />
          </button>
          {activeDropdown === "sector" && (
            <div
            className="absolute top-[50px] left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white shadow-lg rounded-md z-50"
          >
              <ul className="p-4 grid grid-cols-5 gap-4">
                <li className="flex items-center flex-col hover:text-green-600">
                  <img src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/healthcare.png?fit=100%2C100&ssl=1" alt="SMC" className="w-12 h-12" />
                  <span>Healthcare</span>
                </li>
                <li className="flex items-center flex-col hover:text-green-600">
                  <img src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/manufacturing-1.png?fit=100%2C100&ssl=1" alt="SIS" className="w-12 h-12" />
                  <span>Manufacturing</span>
                </li>
                <li className="flex items-center flex-col hover:text-green-600">
                  <img
                    src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/retail.png?fit=100%2C100&ssl=1"
                    alt="center"
                    className="w-12 h-12"
                  />
                  <span>Retail</span>
                </li>
                <li className="flex items-center flex-col hover:text-green-600">
                  <img
                    src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/education.png?fit=100%2C100&ssl=1"
                    alt="Learning"
                    className="w-12 h-12"
                  />
                  <span>Educational</span>
                </li>
                <li className="flex items-center flex-col hover:text-green-600">
                  <img
                    src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/residential.png?fit=100%2C100&ssl=1"
                    alt="Learning"
                    className="w-12 h-12"
                  />
                  <span>Residential</span>
                </li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Solutions Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("solutions")}
            className="flex items-center text-gray-700 hover:text-green-600 font-medium"
          >
            Solutions <FaChevronDown className="ml-1" />
          </button>
          {activeDropdown === "solutions" && (
            <div
              className="absolute top-[50px] left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] bg-white shadow-lg rounded-md z-50"
            >
              <ul className="p-4 grid grid-cols-4 gap-4">
                <li className="flex items-center hover:text-green-600 flex-col">
                  <img
                    src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/computerized.png?fit=100%2C100&ssl=1"
                    alt="CMMS"
                    className="w-12 h-12"
                  />
                  <span className="text-[14px]">Computerised Maintenance Management System</span>
                </li>
                <li className="flex items-center hover:text-green-600 flex-col">
                  <img
                    src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/Indoor-air-quality.png?fit=100%2C100&ssl=1"
                    alt="IAQ"
                    className="w-12 h-12"
                  />
                  <span className="text-[14px]">Indoor Air Quality</span>
                </li>
                <li className="flex items-center hover:text-green-600 flex-col">
                  <img
                    src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/hospital-operations.png?fit=100%2C100&ssl=1"
                    alt="Hospital Operations"
                    className="w-12 h-12"
                  />
                  <span className="text-[14px]">Uberizing Hospital Operation</span>
                </li>
                <li className="flex items-center hover:text-green-600 flex-col">
                  <img
                    src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/surface-disinfection.png?fit=100%2C100&ssl=1"
                    alt="Disinfection"
                    className="w-12 h-12"
                  />
                  <span className="text-[14px]">Next Generation Disinfection System</span>
                </li>
                <li className="flex items-center hover:text-green-600 flex-col">
                  <img
                    src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/next-gen-disinfection.png?fit=100%2C100&ssl=1"
                    alt="Surface Disinfection"
                    className="w-12 h-12"
                  />
                  <span className="text-[14px]">Smart Surface Disinfection Program</span>
                </li>
                <li className="flex items-center hover:text-green-600 flex-col">
                  <img
                    src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/Ultraviolet.png?fit=100%2C100&ssl=1"
                    alt="Facility Management"
                    className="w-12 h-12"
                  />
                  <span className="text-[14px]">Integrated Facility Management</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Company Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("company")}
            className="flex items-center text-gray-700 hover:text-green-600 font-medium"
          >
            Company <FaChevronDown className="ml-1" />
          </button>
          {activeDropdown === "company" && (
            <div
            className="absolute top-[50px] left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white shadow-lg rounded-md z-50"
          >
              <ul className="p-4 grid grid-cols-4 gap-4">
                <li className="flex items-center flex-col hover:text-green-600">
                  <img src="https://i0.wp.com/smc-india.com/wp-content/uploads/2024/04/SMC-Logo.png?fit=365%2C195&ssl=1" alt="SMC" className="w-12 h-12" />
                  <span>About SMC India</span>
                </li>
                <li className="flex items-center flex-col hover:text-green-600">
                  <img src="https://i0.wp.com/smc-india.com/wp-content/uploads/2024/04/sis-enterprise.png?fit=600%2C191&ssl=1" alt="SIS" className="w-12 h-12" />
                  <span>About SIS Group</span>
                </li>
                <li className="flex items-center flex-col hover:text-green-600">
                  <img
                    src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/centre-of-excellence.png?fit=100%2C100&ssl=1"
                    alt="center"
                    className="w-12 h-12"
                  />
                  <span>Centre Of Excellence</span>
                </li>
                <li className="flex items-center flex-col hover:text-green-600">
                  <img
                    src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/LD.png?fit=100%2C100&ssl=1"
                    alt="Learning"
                    className="w-12 h-12"
                  />
                  <span>Learning & Development</span>
                </li>
                <li className="flex items-center flex-col hover:text-green-600">
                  <img
                    src="https://i0.wp.com/smc-india.com/wp-content/uploads/2024/02/compliance.png?fit=100%2C100&ssl=1"
                    alt="Compliance"
                    className="w-12 h-12"
                  />
                  <span>Compliance</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Static Links */}
        <a
          href="/blog"
          className="text-gray-700 hover:text-green-600 font-medium"
        >
          Blog
        </a>
        <a
          href="/careers"
          className="text-gray-700 hover:text-green-600 font-medium"
        >
          Careers
        </a>
        <a
          href="/contact"
          className="text-gray-700 hover:text-green-600 font-medium"
        >
          Contact Us
        </a>

        {/* Free Assessment Button */}
        <a
          href="/free-assessment"
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Free Assessment
        </a>
      </nav>
    </header>
  );
};

export default Header;
