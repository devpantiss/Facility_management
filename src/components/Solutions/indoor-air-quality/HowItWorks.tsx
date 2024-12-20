import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <h2 className="text-center text-2xl lg:text-4xl font-semibold text-gray-800 mb-8">
          How Does IAQ Work?
        </h2>

        {/* Video Section */}
        <div className="flex justify-center">
          <div className="w-full lg:w-3/4">
            <video
              className="w-full h-full rounded-lg"
              src="https://ik.imagekit.io/grnoesre9/air-flow-22.webm?updatedAt=1696841848217" // Replace with your video URL
              autoPlay
              loop
              muted
              playsInline
              style={{
                backgroundColor: "transparent",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
