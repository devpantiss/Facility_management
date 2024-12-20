import React from "react";

const AuditAndCelebration: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="bg-yellow-400 text-black p-8 md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">
          Site Certifications via 3rd Party Audits
        </h2>
        <p className="text-lg font-semibold mb-4">
          External Audit of Quality standards conducted to ensure we match
          customer expectations and best in class quality standards.
        </p>
        <p className="text-sm">
          SMC Integrated Facility Management Solutions Limited is India's first
          IFM company to independently conduct service excellence and quality
          audits, ensuring the meticulous implementation of standardized
          operating processes at unit levels.
        </p>
      </div>

      {/* Right Section */}
      <div className="bg-green-800 text-white p-8 md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Utsav Celebration</h2>
        <p className="mb-4">
          Celebration of Excellence for Highest Scorer Retail and Healthcare
          Units in 3rd Party Audits, conducted by our external audit partner,
          Shaw and Hotels, who certifies our sites by analyzing our processes
          and quality standards.
        </p>
        <h3 className="text-xl font-bold mb-2">
          SMC Integrated Facility Management Solutions Limited celebrates the
          quarterly success of the highest-scoring retail and healthcare units:
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Invitations and welcomes from our respected clients</li>
          <li>
            Motivational Message from Chief Operating Officer, SMC India, Mr.
            Edward D’Souza
          </li>
          <li>A short speech by other team members</li>
          <li>Rewards and Certificate Distribution</li>
          <li>Fun Activities and Snack Distribution</li>
        </ul>
      </div>
    </div>
  );
};

export default AuditAndCelebration;
