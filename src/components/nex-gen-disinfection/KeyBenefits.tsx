import React from "react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="border border-yellow-300 rounded-lg p-6 text-center shadow-sm bg-yellow-50">
      <div className="flex justify-center mb-4 text-green-600 text-4xl">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const KeyBenefits: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8">Key Benefits</h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BenefitCard
            icon="🦠"
            title="Kills 19+ Types of Pathogens"
            description="With this treatment, you can get rid of dangerous & contagious viruses such as H1N1 & SARS."
          />
          <BenefitCard
            icon="🛡️"
            title="90 Day Protection"
            description="This solution helps keep your surfaces protected for 90 days without disruption."
          />
          <BenefitCard
            icon="🔗"
            title="Suppress Transmission"
            description="Ensures safety with patented technology, protecting against cross-contamination."
          />
          <BenefitCard
            icon="👍"
            title="Proven Effectiveness"
            description="Effective against tough viruses that escape regular microbial treatments."
          />
          <BenefitCard
            icon="🛡️"
            title="Wear Resistant"
            description="Completely resistant to cleaning, offering all-day-long protection and infection control."
          />
          <BenefitCard
            icon="✨"
            title="Works on All Surfaces"
            description="Works on all kinds of metallic and non-metallic surfaces for complete coverage."
          />
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
