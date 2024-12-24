import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
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
import { MdOutlinePlumbing } from "react-icons/md";
import { MdElectricalServices } from "react-icons/md";
import { GiHighGrass } from "react-icons/gi";

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isSpecialPath =
    location.pathname === "/sectors/religious-and-tourist-spots" ||
    location.pathname === "/sectors/public-transport-hub";
  const activeColorClass = isSpecialPath ? "text-yellow-600" : "text-green-600";
  const hoverColorClass = isSpecialPath
    ? "hover:text-yellow-600"
    : "hover:text-green-600";

  const ring = isSpecialPath ? "ring-yellow-600" : "ring-green-600";

  const logoSrc = isSpecialPath
    ? "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,w_600,h_290/v1735019328/2-removebg-preview_lap3um.png"
    : "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,w_600,h_290/v1734596616/MWF__4_-removebg-preview_ls1iys.png";

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white mx-auto flex justify-between items-center shadow-md fixed top-0 w-full z-50 px-12">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logoSrc} alt="Logo" className="lg:h-32 h-20" />
        </Link>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:flex items-center space-x-6">
        {/* Solutions Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("solutions")}
            className={`flex items-center text-white ${hoverColorClass} font-medium`}
          >
            Solutions <FaChevronDown className="ml-1" />
          </button>
          {activeDropdown === "solutions" && (
            <div
              className={`absolute top-[50px] left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] bg-black/90 ring-2 ${ring} shadow-lg rounded-md z-50`}
            >
              <ul className="p-4 grid grid-cols-4 gap-4">
                <Link to="/solutions/plumbing">
                  <li
                    className={`flex items-center ${hoverColorClass} flex-col`}
                  >
                    <MdOutlinePlumbing
                      className={`${activeColorClass} text-[44px]`}
                    />
                    <span className="text-center text-white text-[14px]">
                      Plumbing{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/electrical-repair">
                  <li
                    className={`flex items-center flex-col ${hoverColorClass}`}
                  >
                    <MdElectricalServices
                      className={`${activeColorClass} text-[44px]`}
                    />
                    <span className="text-center text-white text-[14px]">
                      Electrical Repairs{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/landscaping">
                  <li
                    className={`flex items-center flex-col ${hoverColorClass}`}
                  >
                    <GiHighGrass
                      className={`${activeColorClass} text-[44px]`}
                    />
                    <span className="text-center text-white text-[14px]">
                      Landscaping{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/ai-anabled-iot-management-system">
                  <li
                    className={`flex items-center flex-col ${hoverColorClass}`}
                  >
                    <GrCloudComputer
                      className={`${activeColorClass} text-[44px]`}
                    />
                    <span className="text-center text-white text-[14px]">
                      AI-enabled IoT Maintenance System{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/energy-audit">
                  <li
                    className={`flex items-center flex-col ${hoverColorClass}`}
                  >
                    <SlEnergy className={`${activeColorClass} text-[44px]`} />
                    <span className="text-center text-white text-[14px]">
                      Energy Audit & Maintenance{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/staffing-and-payrolling">
                  <li
                    className={`flex items-center flex-col ${hoverColorClass}`}
                  >
                    <FaPeopleGroup
                      className={`${activeColorClass} text-[44px]`}
                    />
                    <span className="text-center text-white text-[14px]">
                      Staffing & Payrolling{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/nano-tech-cleaning-system">
                  <li
                    className={`flex items-center flex-col ${hoverColorClass}`}
                  >
                    <RiReactjsLine
                      className={`${activeColorClass} text-[44px]`}
                    />
                    <span className="text-center text-white text-[14px]">
                      Nano-Tech Cleaning System{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/safely-managed-sanitation">
                  <li
                    className={`flex items-center flex-col ${hoverColorClass}`}
                  >
                    <GiVacuumCleaner
                      className={`${activeColorClass} text-[44px]`}
                    />
                    <span className="text-center text-white text-[14px]">
                      Safely Managed Sanitation{" "}
                    </span>
                  </li>
                </Link>

                <Link to="/solutions/skilling">
                  <li
                    className={`flex items-center flex-col ${hoverColorClass}`}
                  >
                    <FaGraduationCap
                      className={`${activeColorClass} text-[44px]`}
                    />
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
            className={`flex items-center text-white ${hoverColorClass} font-medium`}
          >
            Sectors <FaChevronDown className="ml-1" />
          </button>
          {activeDropdown === "sector" && (
            <div
              className={`absolute top-[50px] left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-black/90 ring-2 ${ring} shadow-lg rounded-md z-50`}
            >
              <ul className="p-4 grid grid-cols-5 gap-4">
                <Link to="/sectors/healthcare-sector">
                  <li
                    className={`flex items-center flex-col ${hoverColorClass}`}
                  >
                    {/* <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/healthcare.png?fit=100%2C100&ssl=1"
                      alt="SMC"
                      className="w-12 h-12"
                    /> */}
                    <MdHealthAndSafety
                      className={`${activeColorClass} text-[44px]`}
                    />
                    <span className="text-center text-white text-[14px]">
                      Healthcare
                    </span>
                  </li>
                </Link>

                <Link to="/sectors/religious-and-tourist-spots">
                  <li
                    className={`flex items-center flex-col ${hoverColorClass}`}
                  >
                    {/* <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/manufacturing-1.png?fit=100%2C100&ssl=1"
                      alt="SIS"
                      className="w-12 h-12"
                    /> */}
                    <GiByzantinTemple
                      className={`${activeColorClass} text-[44px]`}
                    />
                    <span className="text-center text-white text-[14px]">
                      Temples
                    </span>
                  </li>
                </Link>

                <Link to="/sectors/public-transport-hub">
                  <li
                    className={`flex items-center flex-col ${hoverColorClass}`}
                  >
                    {/* <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/retail.png?fit=100%2C100&ssl=1"
                      alt="center"
                      className="w-12 h-12"
                    /> */}
                    <FaBus className={`${activeColorClass} text-[44px]`} />
                    <span className="text-center text-white text-[14px]">
                      Public Transport
                    </span>
                  </li>
                </Link>

                <Link to="/sectors/educational-sector">
                  <li
                    className={`flex items-center flex-col ${hoverColorClass}`}
                  >
                    {/* <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/education.png?fit=100%2C100&ssl=1"
                      alt="Learning"
                      className="w-12 h-12"
                    /> */}
                    <GiOpenBook className={`${activeColorClass} text-[44px]`} />
                    <span className="text-center text-white text-[14px]">
                      Educational
                    </span>
                  </li>
                </Link>

                <Link to="/sectors/residential-sector">
                  <li
                    className={`flex items-center flex-col ${hoverColorClass}`}
                  >
                    {/* <img
                      src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/residential.png?fit=100%2C100&ssl=1"
                      alt="Learning"
                      className="w-12 h-12"
                    /> */}
                    <PiBuildingApartmentFill
                      className={`${activeColorClass} text-[44px]`}
                    />
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
            className={`flex items-center text-white ${hoverColorClass} font-medium`}
          >
            Company <FaChevronDown className="ml-1" />
          </button>
          {activeDropdown === "company" && (
            <div
              className={`absolute top-[50px] left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-black/90 ring-2 ${ring} shadow-lg rounded-md z-50`}
            >
              <ul className="p-4 grid grid-cols-3 gap-4">
                <a
                  href="https://www.pantiss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li
                    className={`flex items-center flex-col ${hoverColorClass}`}
                  >
                    <img
                      src="https://pantiss.com/wp-content/uploads/2022/08/logo.png"
                      alt="SMC"
                      className="h-full w-36 mb-2"
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
                  <li
                    className={`flex items-center flex-col ${hoverColorClass}`}
                  >
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

                <Link to="/">
                  <li
                    className={`flex items-center flex-col ${hoverColorClass}`}
                  >
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
          className={`text-white ${hoverColorClass} font-medium`}
        >
          Careers
        </a>
        <a
          href="/contact-us"
          className={`text-white ${hoverColorClass} font-medium`}
        >
          Contact Us
        </a>

        {/* Free Assessment Button */}
        <a
          href="/free-assessment"
          className={`px-4 py-2 ${activeColorClass} bg-white rounded-md ${hoverColorClass}`}
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
        <div className="fixed lg:hidden top-0 right-0 w-3/4 h-full bg-black shadow-lg z-50 flex flex-col p-6 overflow-y-auto">
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
