import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
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

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:flex items-center space-x-6">
        {/* Solutions Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("solutions")}
            className="flex items-center text-gray-700 hover:text-green-600 font-medium"
          >
            Solutions <FaChevronDown className="ml-1" />
          </button>
          {activeDropdown === "solutions" && (
            <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] bg-white shadow-lg rounded-md z-50">
              <ul className="p-4 grid grid-cols-4 gap-4">
                <Link to="/solutions/ai-anabled-iot-management-system">
                  <li className="flex items-center hover:text-green-600 flex-col">
                    <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/computerized.png?fit=100%2C100&ssl=1"
                      alt="AIMMS"
                      className="w-12 h-12"
                    />
                    <span className="text-center text-[14px]">
                      AI-enabled IoT Maintenance System{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/energy-audit">
                  <li className="flex items-center hover:text-green-600 flex-col">
                    <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/Indoor-air-quality.png?fit=100%2C100&ssl=1"
                      alt="IAQ"
                      className="w-12 h-12"
                    />
                    <span className="text-center text-[14px]">
                      Energy Audit & Maintenance{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/staffing-and-payrolling">
                  <li className="flex items-center hover:text-green-600 flex-col">
                    <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/hospital-operations.png?fit=100%2C100&ssl=1"
                      alt="Hospital Operations"
                      className="w-12 h-12"
                    />
                    <span className="text-center text-[14px]">
                      Staffing & Payrolling{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/nex-gen-disinfection-system">
                  <li className="flex items-center hover:text-green-600 flex-col">
                    <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/surface-disinfection.png?fit=100%2C100&ssl=1"
                      alt="Disinfection"
                      className="w-12 h-12"
                    />
                    <span className="text-center text-[14px]">
                      Next Generation Disinfection System
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/smart-surface-disinfection-program">
                  <li className="flex items-center hover:text-green-600 flex-col">
                    <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/next-gen-disinfection.png?fit=100%2C100&ssl=1"
                      alt="Surface Disinfection"
                      className="w-12 h-12"
                    />
                    <span className="text-center text-[14px]">
                      Nano-Tech Cleaning System{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/integrated-facility-management">
                  <li className="flex items-center hover:text-green-600 flex-col">
                    <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/Ultraviolet.png?fit=100%2C100&ssl=1"
                      alt="Facility Management"
                      className="w-12 h-12"
                    />
                    <span className="text-center text-[14px]">
                      Safely Managed Sanitation(Collection-Segregation-Disposal){" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/skilling">
                  <li className="flex items-center hover:text-green-600 flex-col">
                    <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/LD.png?fit=100%2C100&ssl=1"
                      alt="Learning"
                      className="w-12 h-12"
                    />
                    <span className="text-center text-[14px]">
                      NSQF-Industry Linked Skilling{" "}
                    </span>
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>

        {/* Sectors Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("sector")}
            className="flex items-center text-gray-700 hover:text-green-600 font-medium"
          >
            Sectors <FaChevronDown className="ml-1" />
          </button>
          {activeDropdown === "sector" && (
            <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white shadow-lg rounded-md z-50">
              <ul className="p-4 grid grid-cols-5 gap-4">
                <Link to="/sectors/healthcare-sector">
                  <li className="flex items-center flex-col hover:text-green-600">
                    <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/healthcare.png?fit=100%2C100&ssl=1"
                      alt="SMC"
                      className="w-12 h-12"
                    />
                    <span>Healthcare</span>
                  </li>
                </Link>

                <Link to="/sectors/religious-and-tourist-spots">
                  <li className="flex items-center flex-col hover:text-green-600">
                    <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/manufacturing-1.png?fit=100%2C100&ssl=1"
                      alt="SIS"
                      className="w-12 h-12"
                    />
                    <span>Religious/Tourist</span>
                  </li>
                </Link>

                <Link to="/sectors/public-transport-hub">
                  <li className="flex items-center flex-col hover:text-green-600">
                    <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/retail.png?fit=100%2C100&ssl=1"
                      alt="center"
                      className="w-12 h-12"
                    />
                    <span>Public Transport</span>
                  </li>
                </Link>

                <Link to="/sectors/educational-sector">
                  <li className="flex items-center flex-col hover:text-green-600">
                    <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/education.png?fit=100%2C100&ssl=1"
                      alt="Learning"
                      className="w-12 h-12"
                    />
                    <span>Educational</span>
                  </li>
                </Link>

                <Link to="/sectors/residential-sector">
                  <li className="flex items-center flex-col hover:text-green-600">
                    <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/residential.png?fit=100%2C100&ssl=1"
                      alt="Learning"
                      className="w-12 h-12"
                    />
                    <span>Residential</span>
                  </li>
                </Link>
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
            <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white shadow-lg rounded-md z-50">
              <ul className="p-4 grid grid-cols-4 gap-4">
                <li className="flex items-center flex-col hover:text-green-600">
                  <img
                    src="https://i0.wp.com/smc-india.com/wp-content/uploads/2024/04/SMC-Logo.png?fit=365%2C195&ssl=1"
                    alt="SMC"
                    className="w-12 h-12"
                  />
                  <span>About SMC India</span>
                </li>
                <li className="flex items-center flex-col hover:text-green-600">
                  <img
                    src="https://i0.wp.com/smc-india.com/wp-content/uploads/2024/04/sis-enterprise.png?fit=600%2C191&ssl=1"
                    alt="SIS"
                    className="w-12 h-12"
                  />
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

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-700 hover:text-green-600 focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 flex flex-col p-6 overflow-y-auto">
          <button
            onClick={toggleMobileMenu}
            className="self-end text-gray-700 hover:text-green-600 focus:outline-none mb-6"
          >
            <FaTimes size={24} />
          </button>
          <nav className="flex flex-col space-y-4">
            <a
              href="/sectors"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Sectors
            </a>
            <a
              href="/solutions"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Solutions
            </a>
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
            <a
              href="/free-assessment"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Free Assessment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
