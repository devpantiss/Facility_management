import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrCloudComputer } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiVacuumCleaner } from "react-icons/gi";
import { RiReactjsLine } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { GiByzantinTemple } from "react-icons/gi";
import { FaBus } from "react-icons/fa6";
import { GiOpenBook } from "react-icons/gi";
import { PiBuildingApartmentFill } from "react-icons/pi";

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
    <header className="bg-black text-white mx-auto flex justify-between items-center shadow-md fixed top-0 w-full z-50 px-12 py-2">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,w_600,h_300/v1734596616/MWF__4_-removebg-preview_ls1iys.png"
          alt="Logo"
          className="lg:h-32 h-20"
        />
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:flex items-center space-x-6">
        {/* Solutions Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("solutions")}
            className="flex items-center text-white hover:text-green-600 font-medium"
          >
            Solutions <FaChevronDown className="ml-1" />
          </button>
          {activeDropdown === "solutions" && (
            <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] bg-black/90 ring-2 ring-green-600 shadow-lg rounded-md z-50">
              <ul className="p-4 grid grid-cols-3 gap-4">
                <Link to="/solutions/ai-anabled-iot-management-system">
                  <li className="flex items-center hover:text-green-600 flex-col">
                    {/* <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/computerized.png?fit=100%2C100&ssl=1"
                      alt="AIMMS"
                      className="w-12 h-12"
                    /> */}
                    <GrCloudComputer className="text-green-600 text-[44px]" />
                    <span className="text-center text-white text-[14px]">
                      AI-enabled IoT Maintenance System{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/energy-audit">
                  <li className="flex items-center hover:text-green-600 flex-col">
                    {/* <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/Indoor-air-quality.png?fit=100%2C100&ssl=1"
                      alt="IAQ"
                      className="w-12 h-12"
                    /> */}
                    <SlEnergy className="text-green-600 text-[44px]" />
                    <span className="text-center text-white text-[14px]">
                      Energy Audit & Maintenance{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/staffing-and-payrolling">
                  <li className="flex items-center hover:text-green-600 flex-col">
                    {/* <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/hospital-operations.png?fit=100%2C100&ssl=1"
                      alt="Hospital Operations"
                      className="w-12 h-12"
                    /> */}
                    <FaPeopleGroup className="text-green-600 text-[44px]" />
                    <span className="text-center text-white text-[14px]">
                      Staffing & Payrolling{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/nano-tech-cleaning-system">
                  <li className="flex items-center hover:text-green-600 flex-col">
                    {/* <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/next-gen-disinfection.png?fit=100%2C100&ssl=1"
                      alt="Surface Disinfection"
                      className="w-12 h-12"
                    /> */}
                    <RiReactjsLine className="text-green-600 text-[44px]" />
                    <span className="text-center text-white text-[14px]">
                      Nano-Tech Cleaning System{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/safely-managed-sanitation">
                  <li className="flex items-center hover:text-green-600 flex-col">
                    {/* <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/Ultraviolet.png?fit=100%2C100&ssl=1"
                      alt="Facility Management"
                      className="w-12 h-12"
                    /> */}
                    <GiVacuumCleaner className="text-green-600 text-[44px]" />
                    <span className="text-center text-white text-[14px]">
                      Safely Managed Sanitation{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/skilling">
                  <li className="flex items-center hover:text-green-600 flex-col">
                    {/* <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/LD.png?fit=100%2C100&ssl=1"
                      alt="Learning"
                      className="w-12 h-12"
                    /> */}
                    <FaGraduationCap className="text-green-600 text-[44px]" />
                    <span className="text-center text-white text-[14px]">
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
            className="flex items-center text-white hover:text-green-600 font-medium"
          >
            Sectors <FaChevronDown className="ml-1" />
          </button>
          {activeDropdown === "sector" && (
            <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-black/90 ring-2 ring-green-600 shadow-lg rounded-md z-50">
              <ul className="p-4 grid grid-cols-5 gap-4">
                <Link to="/sectors/healthcare-sector">
                  <li className="flex items-center flex-col hover:text-green-600">
                    {/* <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/healthcare.png?fit=100%2C100&ssl=1"
                      alt="SMC"
                      className="w-12 h-12"
                    /> */}
                    <MdHealthAndSafety className="text-green-600 text-[44px]" />
                    <span className="text-center text-white text-[14px]">
                      Healthcare
                    </span>
                  </li>
                </Link>

                <Link to="/sectors/religious-and-tourist-spots">
                  <li className="flex items-center flex-col hover:text-green-600">
                    {/* <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/manufacturing-1.png?fit=100%2C100&ssl=1"
                      alt="SIS"
                      className="w-12 h-12"
                    /> */}
                    <GiByzantinTemple className="text-green-600 text-[44px]" />
                    <span className="text-center text-white text-[14px]">
                      Temples
                    </span>
                  </li>
                </Link>

                <Link to="/sectors/public-transport-hub">
                  <li className="flex items-center flex-col hover:text-green-600">
                    {/* <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/retail.png?fit=100%2C100&ssl=1"
                      alt="center"
                      className="w-12 h-12"
                    /> */}
                    <FaBus className="text-green-600 text-[44px]" />
                    <span className="text-center text-white text-[14px]">
                      Public Transport
                    </span>
                  </li>
                </Link>

                <Link to="/sectors/educational-sector">
                  <li className="flex items-center flex-col hover:text-green-600">
                    {/* <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/education.png?fit=100%2C100&ssl=1"
                      alt="Learning"
                      className="w-12 h-12"
                    /> */}
                    <GiOpenBook className="text-green-600 text-[44px]" />
                    <span className="text-center text-white text-[14px]">
                      Educational
                    </span>
                  </li>
                </Link>

                <Link to="/sectors/residential-sector">
                  <li className="flex items-center flex-col hover:text-green-600">
                    {/* <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/residential.png?fit=100%2C100&ssl=1"
                      alt="Learning"
                      className="w-12 h-12"
                    /> */}
                    <PiBuildingApartmentFill className="text-green-600 text-[44px]" />
                    <span className="text-center text-white text-[14px]">
                      Residential
                    </span>
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
            className="flex items-center text-white hover:text-green-600 font-medium"
          >
            Company <FaChevronDown className="ml-1" />
          </button>
          {activeDropdown === "company" && (
            <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-black/90 ring-2 ring-green-600 shadow-lg rounded-md z-50">
              <ul className="p-4 grid grid-cols-3 gap-4">
                <a
                  href="https://pantiss-official-client.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center flex-col hover:text-green-600">
                    <img
                      src="https://pantiss.com/wp-content/uploads/2022/08/logo.png"
                      alt="SMC"
                      className="h-10 w-full mb-2"
                    />
                    <span className="text-center text-white text-[14px]">
                      Pantiss
                    </span>
                  </li>
                </a>

                <a
                 href="https://admin.mowash.in/"
                 target="_blank"
                 rel="noopener noreferrer"
                >
                  <li className="flex items-center flex-col hover:text-green-600">
                    <img
                      src="https://mowash.in/Images/mo-wash-logo.svg"
                      alt="SIS"
                      className="w-full h-10 mb-2"
                    />
                    <span className="text-center text-white text-[14px]">
                      MoWash
                    </span>
                  </li>
                </a>

                <Link to="/"
                >
                  <li className="flex items-center flex-col hover:text-green-600">
                    <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/centre-of-excellence.png?fit=100%2C100&ssl=1"
                      alt="center"
                      className="w-12 h-12"
                    />
                    <span className="text-center text-white text-[14px]">
                      Centre Of Excellence
                    </span>
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>

        {/* Static Links */}
        <a
          href="/careers"
          className="text-white hover:text-green-600 font-medium"
        >
          Careers
        </a>
        <a
          href="/contact-us"
          className="text-white hover:text-green-600 font-medium"
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
          className="text-white hover:text-green-600 focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 flex flex-col p-6 overflow-y-auto">
          <button
            onClick={toggleMobileMenu}
            className="self-end text-white hover:text-green-600 focus:outline-none mb-6"
          >
            <FaTimes size={24} />
          </button>
          <nav className="flex flex-col space-y-4">
            <a
              href="/sectors"
              className="text-white hover:text-green-600 font-medium"
            >
              Sectors
            </a>
            <a
              href="/solutions"
              className="text-white hover:text-green-600 font-medium"
            >
              Solutions
            </a>
            <a
              href="/blog"
              className="text-white hover:text-green-600 font-medium"
            >
              Blog
            </a>
            <a
              href="/careers"
              className="text-white hover:text-green-600 font-medium"
            >
              Careers
            </a>
            <a
              href="/contact"
              className="text-white hover:text-green-600 font-medium"
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
