import React from "react";

const Result: React.FC = () => {
  return (
    <section className="bg-[#edf7f4] py-10">
      <div className="container mx-auto flex flex-col justify-center items-center gap-8 px-6">
        {/* Text Section */}
        <div className="w-full text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
            Result
          </h2>
        </div>
        {/* Image Section */}
        <div className="w-full flex justify-center items-center">
          <img
            src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/instalition-1.jpg-min.png?resize=1024%2C299&ssl=1" // Replace with the actual image URL
            alt="Commercial UV Air Sanitizer"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Result;
