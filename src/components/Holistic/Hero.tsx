import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="relative h-[100vh] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://purijagannathadarshan.in/wp-content/uploads/2022/12/desk.jpg')",
      }}
    >
      {/* https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1721820684945_Lingaraj%20Temple%20CV%20.jpg&w=1080&q=75 */}
      {/* Rotating Sun */}
      <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
        <img
          src="https://3ionetra.in/images/home/banner1/flower1.svg"
          alt="Rotating Sun"
          className="rotating-sun w-32 h-32"
        />
      </div>

      {/* Text Content */}
      <div className="absolute -inset-2 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl md:text-4xl max-w-4xl font-bold mb-4">
          Elevating Temple Experiences through Comprehensive Facility Management
          Practices
        </h1>
        <div className="bg-orange-500 px-4 py-2 rounded-full text-sm font-medium">
          Home / 3ioSeva / Facility Management at Temples
        </div>
      </div>
    </div>
  );
};

export default Hero;
