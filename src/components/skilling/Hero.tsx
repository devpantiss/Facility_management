import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="pt-24 relative bg-cover bg-center h-full lg:h-[90vh] bg-no-repeat p-8 md:p-12 md:pt-24 flex flex-col md:flex-row items-center"
      style={{
        backgroundImage:
          "url('https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/smc-bg.png?fit=1440%2C486&ssl=1')",
      }}
    >

      {/* Content */}
      <div className="relative md:w-1/2 mb-8 md:mb-0 z-10">
        <h2 className="text-6xl font-bold text-gray-900 mb-4">
          Empowering Success in FM through Training & Development
        </h2>
        <p className="text-gray-700 mb-6">
          Presenting JMTs (SMC-India’s Pride)—We recruit, nurture, and equip
          budding Hotel Management Graduates to ascend as industry leaders.
        </p>
        <p className="text-gray-700">
          Our one-year Management Training & Development Program encapsulates a
          blend of theoretical and practical exposure in Facility Management,
          offering a kaleidoscope of industry segment insights to the JMTs.
        </p>

        {/* Info Cards */}
        <div className="mt-8 flex flex-col md:flex-row gap-6">
          <div className="bg-white shadow-md text-center p-6 rounded-lg">
            <p className="text-3xl font-bold text-green-600">2 Months</p>
            <p className="text-gray-600">Of Bootcamp Training</p>
          </div>
          <div className="bg-white shadow-md text-center p-6 rounded-lg">
            <p className="text-3xl font-bold text-green-600">10 Months</p>
            <p className="text-gray-600">Of On the Job Training</p>
          </div>
        </div>
      </div>

      {/* Right Images */}
      <div className="relative md:w-1/2 flex flex-col md:flex-row gap-4 justify-center items-center z-10">
        <img
          src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/hero-img-ld-min.png?w=922&ssl=1"
          alt="Training session"
          className="rounded-lg w-[600px]"
        />
        
      </div>
    </section>
  );
};

export default Hero;
