import React from "react";

const StepSection: React.FC = () => {
  return (
    <section className="bg-[#F5FCFF] py-12">
      <div className="container mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-8">
          <span className="text-[#22C55E]">Get started in 1 hour</span> with
          WashX Payroll Software
        </h2>

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0">
          {/* Step 1 */}
          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center justify-center w-10 h-10 border-2 border-green-500 rounded-full text-green-500 font-semibold mb-4">
              1
            </div>
            <h3 className="font-bold mb-2">Create an Account</h3>
            <p className="text-gray-600 text-sm">
              Sign up for free with your company details. Keep all details handy
              for a smooth start.
            </p>
          </div>

          {/* Line Connector */}
          <div className="hidden md:block flex-1 border-t-2 border-gray-300"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center justify-center w-10 h-10 border-2 border-green-500 rounded-full text-green-500 font-semibold mb-4">
              2
            </div>
            <h3 className="font-bold mb-2">Onboard Your Workforce</h3>
            <p className="text-gray-600 text-sm">
              Enter workforce details on the dashboard in bulk, or have your
              employees self-onboard.
            </p>
          </div>

          {/* Line Connector */}
          <div className="hidden md:block flex-1 border-t-2 border-gray-300"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center justify-center w-10 h-10 border-2 border-green-500 rounded-full text-green-500 font-semibold mb-4">
              3
            </div>
            <h3 className="font-bold mb-2">Run Payroll!</h3>
            <p className="text-gray-600 text-sm">
              Now that you’ve added your company & employee details, it’s time
              to run your payroll.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-[#22C55E] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#16A34A] transition duration-300">
            Start Now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepSection;
