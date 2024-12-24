import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="relative h-[100vh] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735038115/ABX_SHRI_PURUSHOTTAMA_KSHETRA_PURI_1_syhjkl.jpg')",
        // "url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734504527/shruti-singh-P25k6IWVYMI-unsplash_oiqc21.jpg')",
      }}
    >
      {/* Rotating Sun */}
      <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
        <img
          src="https://3ionetra.in/images/home/banner1/flower1.svg"
          alt="Rotating Sun"
          className="rotating-sun w-32 h-32"
        />
      </div>

      {/* Text Content */}
      <div className="absolute top-[75%] lg:left-1/2 lg:transform lg:-translate-x-1/2 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl md:text-4xl max-w-4xl font-bold mb-4">
          Elevating Temple Experiences through Comprehensive Facility Management
          Practices
        </h1>
      </div>
    </div>
  );
};

export default Hero;
