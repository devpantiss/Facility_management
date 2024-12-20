import React from "react";

const BMSSection: React.FC = () => {
  return (
    <section className="bg-[#fefee7] py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Wireless BMS - Automate your building assets
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          <strong className="font-semibold">
            Aunoa the future of intelligent facility control
          </strong>{" "}
          – A wireless system that streamlines the process, saving precious
          resources and accelerating your facility’s operational efficiency
        </p>

        {/* Call to Action */}
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md mb-8">
          Book a Demo
        </button>

        {/* Mobile with Video Section */}
        <div className="relative mx-auto w-full flex justify-center items-center max-w-4xl">
          {/* Mobile Video */}
          <div className="relative z-10 rounded-xl overflow-hidden">
            <video className="w-[700px] h-full" autoPlay muted loop>
              <source
                src="https://ik.imagekit.io/grnoesre9/wireless-bms%202.webm?updatedAt=1701862769318"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid mt-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          <BenefitCard
            title="Enhance asset life cycle"
            icon="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/wireless-bms-benfits-1.png?fit=71%2C71&ssl=1"
          />
          <BenefitCard
            title="Real time monitoring & control"
            icon="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/wireless-bms-benfits-2.png?fit=71%2C71&ssl=1"
          />
          <BenefitCard
            title="Contribution to ESG initiatives"
            icon="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/wireless-bms-benfits-3.png?fit=70%2C71&ssl=1"
          />
          <BenefitCard
            title="Assured energy saving"
            icon="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/wireless-bms-benfits-4.png?fit=71%2C71&ssl=1"
          />
        </div>
      </div>
    </section>
  );
};

export default BMSSection;

// Sub-components
const BenefitCard = ({ title, icon }: { title: string; icon: string }) => (
  <div className="p-6 bg-white rounded-md border-[2px] border-green-500 shadow-sm flex flex-col items-center">
    <img src={icon} alt={title} />
    <p className="text-gray-700 font-medium text-center">{title}</p>
  </div>
);
