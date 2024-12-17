import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://smc-india.com/wp-content/uploads/2024/01/Education.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Creating a Home Away From Home: Elevating Educational Environments{" "}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Transform your educational institution into a nurturing and secure
          space that fosters student growth; we take care of the non-core, so
          you can focus on what matters most: nurturing young minds.
        </p>

        <button className="px-4 py-2 bg-green-600 rounded-md">Book a Consultation</button>
      </div>
    </div>
  );
};

export default Hero;
