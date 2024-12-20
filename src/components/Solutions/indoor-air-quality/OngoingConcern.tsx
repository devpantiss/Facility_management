import React from "react";

const OngoingConcern: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <h2 className="text-center text-2xl lg:text-4xl font-semibold text-gray-800 mb-8">
          Indoor Air Quality is an ongoing concern for organizations with the
          following characteristics:
        </h2>

        {/* Video Section */}
        <div className="flex justify-center">
          <div className="w-full lg:w-3/4">
            <video
              className="w-full h-56 rounded-lg"
              src="https://ik.imagekit.io/grnoesre9/flowchart.webm?updatedAt=1704369415953" // Replace with your video URL
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

export default OngoingConcern;
