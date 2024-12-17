import React from "react";



const IotBasedCare: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Safer Hospital Environment with IoT-Backed Healthcare Solutions:
        </h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">
          Revolutionizing Healthcare Hygiene
        </h3>
        <p className="text-gray-600 leading-relaxed mb-12">
          SMC India is at the forefront of infection prevention and
          cross-contamination control. We prioritize patient & staff safety
          through our SSDP, UVGI, and clean air solutions. SMC India is committed
          to revolutionizing healthcare infection & control with cutting-edge solutions.
        </p>

        {/* Video Section */}
        <div className="mt-6">
          <div className="relative w-full max-w-2xl mx-auto">
            <video
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-lg"
            >
              <source src="https://ik.imagekit.io/grnoesre9/SMC-UI-02.webm?updatedAt=1704181425031" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IotBasedCare;
