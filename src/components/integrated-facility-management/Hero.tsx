import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <section className="max-w-6xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-8">
        {/* Left Section: Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800 leading-tight">
            COE Served Indian Organization to wide diaspora of multifaceted
            organizations
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            SMC India provides tech-enabled integrated facility management
            solutions and consulting through digitization, mechanization, and
            automation. As a solution-driven company, we’ve cultivated
            operational champions across diverse sectors. Our dynamic team
            comprises 35,000 skilled Facility Management Professionals,
            supported by over 100+ engineers and 200+ IHM graduates, forming the
            core of excellence at SMC Integrated Facility Management Solutions
            Limited.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
            Book a Demo
          </button>
        </div>

        {/* Right Section: Video */}
        <div className="flex-1 relative">
          <div className="w-full h-72 md:h-full overflow-hidden rounded-lg">
            <video
              className="w-full h-full object-cover"
              loop
              autoPlay
              muted
              poster="/path-to-poster-image.jpg"
            >
              <source
                src="https://ik.imagekit.io/grnoesre9/IFM.webm?updatedAt=1704367719454"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
