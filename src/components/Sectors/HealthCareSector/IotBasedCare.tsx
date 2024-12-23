import React from "react";

const IotBasedCare: React.FC = () => {
  return (
    <section className="py-12 bg-black border-b-2 border-green-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading Section */}
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Safer Hospital Environment with IoT-Backed Healthcare Solutions:
        </h2>
        <h3 className="text-2xl font-semibold text-white mb-6">
          Revolutionizing Healthcare Hygiene
        </h3>
        <p className="text-white leading-relaxed mb-12">
          SMC India is at the forefront of infection prevention and
          cross-contamination control. We prioritize patient & staff safety
          through our SSDP, UVGI, and clean air solutions. SMC India is
          committed to revolutionizing healthcare infection & control with
          cutting-edge solutions.
        </p>

        {/* Video Section */}
        <div className="mt-6">
          {/* <div className="relative w-full max-w-2xl mx-auto">
            <video
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-lg"
            >
              <source src="https://ik.imagekit.io/grnoesre9/SMC-UI-02.webm?updatedAt=1704181425031" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
          <div className="flex justify-center h-[500px] items-center bg-black py-10 relative overflow-hidden">
            {/* Rotating Dotted Orbital Circle */}
            <div className="absolute top-0 rounded-full border-[4px] border-dotted border-green-500 h-[450px] w-[450px] animate-spin-clockwise"></div>
            <div className="absolute top-6 rounded-full border-[4px] border-dotted border-green-500 h-[400px] w-[400px] animate-spin-anticlockwise"></div>

            {/* Center Phone */}
            <div className="z-10 relative"></div>
            <div className="relative flex justify-center items-center h-[400px] w-[200px] border-4 border-green-600 rounded-2xl bg-gray-50 shadow-lg">
              <span className="absolute -right-2 top-14 border-4 border-green-600 h-7 rounded-md"></span>
              <span className="absolute -right-2 bottom-36 border-4 border-green-600 h-10 rounded-md"></span>
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734902840/Screenshot_2024-12-19_at_12.40.37_PM_vjht62.png"
                alt="Phone Content"
                className="rounded-xl h-[395px] w-full"
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default IotBasedCare;
