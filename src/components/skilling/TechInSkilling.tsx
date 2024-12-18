import React from "react";

const TechInSkilling: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto flex flex-col justify-center items-center lg:flex-row py-10 px-8">
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <img
            src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/app.gif?fit=442%2C535&ssl=1"
            alt="mob"
          />
        </div>
        <div className="lg:w-1/2 w-full py-6">
          <h1 className="text-2xl text-green-600 font-semibold">
            By using cutting-edge technology, we have transformed facility
            management, making training & development more efficient than ever
            before.
          </h1>
          <h3 className="font-bold mt-4">
            Our initiative, mTrainer, encapsulates real-time training oversight
            and insights, delivering a window into the progress right at our
            clientele’s fingertips.
          </h3>

          <p className="mt-2">
            Our robust Training & Development framework is the linchpin that
            empowers our relentless training & development cadre to foster a
            continuum of learning across all units, while stringent safety
            protocols remain entrenched. This endeavor is solely directed toward
            cultivating enlightenment and vigilance, thereby ensuring a
            sanctuary of safety for our personnel and patrons alike.
          </p>

          <p className="mt-4">
            <strong>Endorsement through Independent Scrutiny: </strong>Our
            commitment to eclipsing the zenith of quality is validated through
            external assessments by third-party auditors. This rigorous
            examination of our quality benchmarks ascertains that we not only
            meet but exceed the anticipations of our clientele, perpetuating a
            hallmark of unrivaled quality standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechInSkilling;
