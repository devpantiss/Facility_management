import React from "react";

const Consultation: React.FC = () => {
  return (
    <div className="px-10 py-6 bg-black">
      <div className="bg-gradient-to-r from-yellow-200 via-green-200 to-teal-100 rounded-lg py-12 px-6 md:px-16 lg:px-24 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Let's Partner for a Better Future
        </h2>
        {/* Subheading */}
        <p className="text-lg text-gray-600 mt-4">
          Experience a transformative journey towards an efficient, sustainable,
          and technologically advanced facility management landscape.
        </p>
        {/* Button */}
        <button className="mt-6 px-8 py-3 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600 transition">
          Book a free consultation
        </button>
      </div>
    </div>
  );
};

export default Consultation;
