import React from "react";

const SpecializedSolution: React.FC = () => {
  return (
    <div className="bg-black border-b-2 border-green-600 px-12">
      <div className="containermx-auto py-8 px-6">
        <h1 className="text-4xl font-bold text-green-600 text-center mb-6">
          Our Specialized Solutions for Healthcare Facilities
        </h1>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="lg:w-1/2 w-full">
            <p className="text-lg text-left text-white">
              Over 50% of beds and mattresses are contaminated with MRSA C.diff,
              VRE, MRSA are most frequently recovered pathogens from floors.
            </p>
            <div className="flex flex-col gap-y-5 mt-8">
              <div className="flex justify-start items-center gap-x-4 w-full">
                <img
                  src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/1-5.png?fit=63%2C63&ssl=1"
                  alt="logo"
                />
                <div>
                  <h2 className="text-green-600">Discharged room inspection protocol</h2>
                  <p className="text-white">
                    High touch cleaning and inspection for IP rooms (Glow Germ
                    Technology)
                  </p>
                </div>
              </div>
              <div className="flex justify-start gap-x-4 w-full">
                <img
                  src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/2-4.png?fit=62%2C63&ssl=1"
                  alt="logo"
                />
                <div>
                  <h2 className="text-green-600">ATP infection swab</h2>
                  <p className="text-white">Instant scientific evidence to verify pathogen count</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center items-center w-full">
            <video
              autoPlay
              loop
              muted
              className=" w-[500px] h-full object-cover"
            >
              <source
                src="https://ik.imagekit.io/grnoesre9/pathogens-stats.webm?updatedAt=1704367718572"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializedSolution;
