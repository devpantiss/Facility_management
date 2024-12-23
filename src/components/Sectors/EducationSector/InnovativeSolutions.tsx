import React from "react";
import PhoneSection from "../../common/PhoneSection";

const InnovativeSolutions: React.FC = () => {
  return (
    <div
      className="bg-contain bg-black"
      style={{
        backgroundImage:
          "url('https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/education-bg.png?fit=1527%2C759&ssl=1')",
      }}
    >
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="max-w-2xl flex flex-col justify-center items-center">
          <h1 className="max-w-lg py-6 text-4xl text-center text-green-600 font-bold">Innovating Facility Management for Education Facilities</h1>
          <p className="max-w-lg text-white text-center mb-4">
            Students aspire to study in a clean, green, hygienic, and safe
            environment. SMC Integrated Facility Management Solutions Limited
            has curated specialized programs for the educational industry based
            on intelligent surveillance & secure systems, smart IoT-based
            maintenance programs, hygienic washroom/classroom cleaning programs,
            and verified staffing solutions.
          </p>
          <p className="max-w-lg text-white text-center">
            Our sophisticated mobile application provides enhanced security to
            the students by ensuring real-time communication and sharing updates
            between the parents, school, and students.
          </p>
        </div>
        <div className="mt-6 w-full">
            <PhoneSection />
            {/* <img src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/prism-2.gif?fit=524%2C557&ssl=1" alt="img"/> */}
        </div>
      </div>
    </div>
  );
};

export default InnovativeSolutions;
