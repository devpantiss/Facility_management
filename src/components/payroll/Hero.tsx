import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 bg-black text-white h-[70vh] overflow-hidden py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <p className="text-green-600 font-medium text-sm mb-4">| Payroll Software</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-6">
              <span className="text-green-600">Fully-Automated</span> Payroll & Compliance Software
            </h1>
            <p className="text-white text-lg mb-8">
              Automate your payroll with precision– disburse salaries, file & pay taxes, like TDS, PF, PT & ESIC from
              a single dashboard on your payroll software
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg inline-block text-center"
              >
                Start Now &rarr;
              </a>
              <a
                href="#"
                className="border border-green-600 hover:bg-blue-50 text-green-600 font-medium px-6 py-3 rounded-lg inline-block text-center"
              >
                View Pricing &rarr;
              </a>
            </div>
          </div>

          {/* Bottom-Right Positioned Image */}
          <div className="">
            <img
              src="https://framerusercontent.com/images/FQgtrGFrSLMoT8pRdUGVZhs8Y.png?scale-down-to=2048" // Replace this with the actual image path
              alt="Payroll Dashboard"
              className="absolute bottom-0 right-0 w-full max-w-xl lg:max-w-7xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
