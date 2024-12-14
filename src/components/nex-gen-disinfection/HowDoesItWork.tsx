import React from "react";

const HowDoesItWork: React.FC = () => {
  return (
    <section className="relative w-full">
      {/* Top Section */}
      <div className="bg-green-700 w-full h-[50vh] flex flex-col justify-center items-center">
        <h2 className="text-white text-4xl font-bold">How Does It Work?</h2>
        <p className="mb-6 p-4 text-white max-w-5xl">
          The antimicrobial technology we use has an active chemical that forms
          a protective bond with the products where it is used. This chemical
          penetrates and bonds with the layers of the object it’s applied to,
          which creates a protective and unbreakable shield for not less than 90
          days.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="bg-white w-full h-[50vh] relative flex justify-center items-center">
        <div className="absolute -top-32 w-[90%] max-w-[900px]">
          {/* Center Image */}
          <img
            src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ngds-comparision.png?resize=1024%2C573&ssl=1" // Replace with your image path
            alt="How It Works"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HowDoesItWork;
