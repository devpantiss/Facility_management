import React from "react";
import PhoneSection from "../../common/PhoneSection";

const InnovativeSolutions: React.FC = () => {
  return (
    <div
      className="bg-contain bg-black bg-center"
      style={{
        backgroundImage:
          "url('https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/residential-bg.png?fit=1526%2C758&ssl=1')",
      }}
    >
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="max-w-2xl flex flex-col justify-center items-center">
          <h1 className="max-w-lg py-6 text-4xl text-green-600 text-center font-bold">
            Redefining Facility Management for Residential Spaces
          </h1>
          <p className="max-w-lg text-center text-white mb-4">
            The way residential complexes are managed defines their residents’
            experience and the property’s long-term value. Facility Management
            in a residential facility is not just limited to cleaning,
            janitorial solutions, or landscaping but includes a wide range of
            solutions like pest control, clubhouse management, technology-backed
            energy management, and optimization, to name a few.
          </p>
          <p className="max-w-lg text-white text-center">
            At SMC Integrated Facility Management Solutions Limited, we
            transform the living spaces by Professional Club House and
            Facilities Solutions, App-Based Home Repair and Maintenance
            Solutions, Digitalize the Utilities Maintenance Management Program,
            Beautify the Grounds and Gardens, Family Oriented Event Management,
            and Professionally Managed Society Maintenance.
          </p>
        </div>
        <div className="w-full mt-6">
          {/* <img
            src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/residential-2nd-img.gif?fit=524%2C557&ssl=1"
            alt="img"
          /> */}
          <PhoneSection />
        </div>
      </div>
    </div>
  );
};

export default InnovativeSolutions;
