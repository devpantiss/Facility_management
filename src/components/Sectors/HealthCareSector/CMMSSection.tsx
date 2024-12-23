import React from "react";
import LaptopSection from "../../common/LaptopSection";

const CMMSSection: React.FC = () => {
  return (
    <section className="bg-black px-8 border-b-2 border-green-600 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-green-600 mb-2">
          MWFMS - MoWash Facility Maintenance System
        </h1>
        <p className="text-white text-lg mb-8">
          <strong className="font-semibold">
            MWFMS the key to smart, proactive operation maintenance{" "}
          </strong>{" "}
          – 360° visibility of operation & maintenance system
        </p>

        {/* Call to Action */}
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md mb-8">
          Book a Demo
        </button>

        {/* Mobile with Video Section */}
        <div className="relative mx-auto w-full flex justify-center items-center max-w-4xl">
          {/* Mobile Video */}
          {/* <div className="relative z-10 rounded-xl overflow-hidden">
            <video className="w-[700px] h-full" autoPlay muted loop>
              <source
                src="https://ik.imagekit.io/grnoesre9/cmms%203.webm?updatedAt=1701849244581"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div> */}
          <LaptopSection />
        </div>

        {/* Benefits Section */}
        <div className="grid mt-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          <BenefitCard
            title="Improved asset life cycle"
            icon="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/cmms-benefits-1-1.png?fit=71%2C71&ssl=1"
          />
          <BenefitCard
            title="Reduced R&M cost"
            icon="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/cmms-benefits-2-1.png?fit=71%2C71&ssl=1"
          />
          <BenefitCard
            title="Fault detection & diagnostics"
            icon="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/cmms-benefits-3-1.png?fit=71%2C71&ssl=1"
          />
          <BenefitCard
            title="Energy analytics & BI"
            icon="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/cmms-benefits-4-1.png?fit=71%2C71&ssl=1"
          />
          <BenefitCard
            title="Utility tracking & benchmarking"
            icon="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/cmms-benefits-5-1.png?fit=71%2C71&ssl=1"
          />
        </div>
      </div>
    </section>
  );
};

export default CMMSSection;

// Sub-components
const BenefitCard = ({ title, icon }: { title: string; icon: string }) => (
  <div className="p-6 bg-transparent rounded-md border-[2px] border-green-500 shadow-sm flex flex-col items-center">
    <img src={icon} alt={title} />
    <p className="text-white font-medium text-center">{title}</p>
  </div>
);
