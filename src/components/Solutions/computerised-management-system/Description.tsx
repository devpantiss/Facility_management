import React from "react";

const Description: React.FC = () => {
  return (
    <section className="bg-black py-16 px-8 border-b-2 border-green-600">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-green-600 leading-snug mb-6">
          MWFMS isn't just software; it's a game-changer. It's the bridge between
          data and decisions.
        </h2>
        {/* Description */}
        <p className="text-white text-base md:text-lg mb-4 leading-relaxed">
          Think of MWFMS as the brain of your maintenance ecosystem. It
          streamlines workflows, ensuring every technician is equipped with the
          right information at the right time. This proactive approach empowers
          informed decision-making, preventing reactive scrambles and costly
          downtime.
        </p>
        <p className="text-white text-base md:text-lg leading-relaxed">
          But MWFMS doesn’t stop there. It’s also your compliance guardian,
          ensuring you adhere to industry standards while maximizing asset life.
          By managing spare parts inventory and scheduling preventive
          maintenance, CMMS keeps your facilities humming like a well-oiled
          machine.
        </p>
      </div>
    </section>
  );
};

export default Description;
