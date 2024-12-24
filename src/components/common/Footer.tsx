import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="relative bg-teal-800 text-white py-12 px-6 md:px-16 lg:px-24">
        {/* Map Section */}
        {/* <div className="absolute inset-y-0 right-0 w-2/5">
          <img
            src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/map.png?w=512&ssl=1" // Replace with the actual map image path
            alt="Map of India with highlights"
            className="h-full object-contain"
          />
        </div> */}

        {/* Content Section */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase text-sm tracking-wide font-medium mb-4">
            Your partner in digital, automated, and ESG-compliant facility
            management
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Managing over{" "}
            <span className="text-yellow-400">30 Thousand ft²</span> area
            operations
          </h1>
          <p className="text-lg md:text-xl font-medium mt-4">
            Across 7 districts in Odisha for 4 key nation builder sectors
          </p>
        </div>
        {/* Line Separator */}
        <div className="mt-8 mx-auto max-w-4xl border-t border-yellow-400" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,w_600,h_300/v1734596616/MWF__4_-removebg-preview_ls1iys.png"
              className="w-44"
            />
            <p className="text-sm">
              Plot No 1215/1500, Khandagiri Bari, Bank of India Lane,
              Bhubaneswar, Odisha, 751030
            </p>
            <p className="text-xs mt-2">
              © 2024 MFM Integrated Facility Management Solutions Limited, an
              MoWash Foundation Enterprises. All Rights Reserved.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Our Solutions</h2>
            <ul className="space-y-2 text-sm">
              <li>Plumbing</li>
              <li>Electrical Repair</li>
              <li>Landscaping</li>
              <li>AI Enabled IoT Maintenance System</li>
              <li>Energy Audit & Maintenance</li>
              <li>Staffing & Payrolling</li>
              <li>Nano-Tech Cleaning System</li>
              <li>Safely Managed Sanitation</li>
              <li>NSQF-Industry Linked Skilling</li>
            </ul>
          </div>

          {/* Sector Specialization */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Sector Specialization
            </h2>
            <ul className="space-y-2 text-sm">
              <li>Healthcare</li>
              <li>Temples</li>
              <li>Public Transport</li>
              <li>Educational</li>
              <li>Residential</li>
            </ul>
          </div>

          {/* More Information */}
          <div>
            <h2 className="text-lg font-semibold mb-4">More Information</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/contact-us" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.pantiss.com"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Pantiss
                </a>
              </li>
              <li>
                <a
                  href="https://admin.mowash.in"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About MoWash
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600"
          >
            WE’RE HIRING!
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
