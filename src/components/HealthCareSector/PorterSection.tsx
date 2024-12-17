import React from "react";

const PorterSection: React.FC = () => {
  return (
    <section className="bg-[#FFFEF4] py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          I-porter - Reinvent Productivity, Elevate Efficiency, Transform Portering
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          <strong className="font-semibold">I-beacon technology</strong> – Elevate your facility’s efficiency using portering technology, resulting in shorter patient wait times and rapid clinician response
        </p>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          <BenefitCard
            title="Reduce patient wait time upto 40%"
            icon="⏳"
          />
          <BenefitCard
            title="Enhanced operational efficiency"
            icon="⚙️"
          />
          <BenefitCard
            title="Offering peace of mind to clinical staff"
            icon="🩺"
          />
          <BenefitCard
            title="Elevate patient experience"
            icon="⭐"
          />
          <BenefitCard
            title="Strategic decision making"
            icon="📊"
          />
        </div>

        {/* Call to Action */}
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md mb-8">
          Book a Demo
        </button>

        {/* Mobile with Video Section */}
        <div className="relative mx-auto w-full flex justify-center items-center max-w-4xl">
          {/* Mobile Video */}
          <div className="relative z-10 rounded-xl overflow-hidden">
            <video
              className="w-[700px] h-full"
              autoPlay
              muted
              loop
            >
              <source src="https://ik.imagekit.io/grnoesre9/iporter%203.webm?updatedAt=1701848564189" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorterSection;

// Sub-components
const BenefitCard = ({ title, icon }: { title: string; icon: string }) => (
  <div className="p-6 bg-white rounded-md border-[2px] border-green-500 lg shadow-sm flex flex-col items-center">
    <div className="text-5xl mb-4 text-green-500">{icon}</div>
    <p className="text-gray-700 font-medium text-center">{title}</p>
  </div>
);
