import React from "react";

const OurProcess: React.FC = () => {
  return (
    <div className="container px-8 py-6 mx-auto flex flex-col justify-center items-center">
      <div>
        <h2 className="text-4xl mb-4 font-bold">Our Process</h2>
      </div>
      <div className="w-full h-72 md:h-full overflow-hidden rounded-lg">
        <video
          className="w-full h-full object-cover"
          loop
          autoPlay
          muted
          poster="/path-to-poster-image.jpg"
        >
          <source
            src="https://ik.imagekit.io/grnoesre9/ngds-process.webm?updatedAt=1704367716645"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default OurProcess;
