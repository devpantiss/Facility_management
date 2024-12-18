import React from "react";

const IQMSSection: React.FC = () => {
  return (
    <section className="bg-black py-12 px-8 border-b-2 border-green-600">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-green-600 mb-2">
          IQMS - Intelligent Quality Management System
        </h1>
        <p className="text-white text-lg mb-8">
          <strong className="font-semibold">
            IQMS seamlessly integrates 360° quality management system
          </strong>{" "}
          – Elevate operational efficiency as well as prioritizes patient and
          nurse satisfaction index
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
                src="https://ik.imagekit.io/grnoesre9/iqms%203.webm?updatedAt=1701768420106"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid mt-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          <BenefitCard
            title="Patient retention"
            icon="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/iqms-benefits-1-1.png?fit=71%2C71&ssl=1"
          />
          <BenefitCard
            title="Workplace satisfaction"
            icon="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/iqms-benefits-2-1.png?fit=71%2C71&ssl=1"
          />
          <BenefitCard
            title="Quality assurance & control"
            icon="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/iqms-benefits-3-1.png?fit=71%2C71&ssl=1"
          />
          <BenefitCard
            title="Improved clinical outcomes"
            icon="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/iqms-benefits-4-1.png?fit=71%2C71&ssl=1"
          />
        </div>
      </div>
    </section>
  );
};

export default IQMSSection;

// Sub-components
const BenefitCard = ({ title, icon }: { title: string; icon: string }) => (
  <div className="p-6 bg-transparent rounded-md border-[2px] border-green-500 shadow-sm flex flex-col items-center">
    <img src={icon} alt={title} />
    <p className="text-white font-medium text-center">{title}</p>
  </div>
);
