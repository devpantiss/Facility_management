import React from "react";

const Proposition: React.FC = () => {
  return (
    <div
      className="relative w-full py-10 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/energy-audit-bg.jpg?fit=1441%2C916&ssl=1')",
      }}
    >
      <div className="bg-[#06674d]/90 flex flex-col justify-center items-center p-6 rounded-lg max-w-5xl w-full">
        <h1 className="text-4xl text-white mb-4">Our Engineering & Energy Audit Propositions</h1>
        <video autoPlay loop muted playsInline>
          <source
            src="https://ik.imagekit.io/grnoesre9/Engineering-&-Energy-Audit-Propositions.webm?updatedAt=1695808785603"
            type="video/mp4"
          />
          your browser does not support the video tag
        </video>
      </div>
    </div>
  );
};

export default Proposition;
