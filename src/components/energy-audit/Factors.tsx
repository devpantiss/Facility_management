import React from "react";

const Factors: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center gap-x-6 items-center px-6 py-8">
        <div className="w-full lg:w-1/2 p-4 text-center lg:text-left">
          <h1 className="text-3xl font-medium text-green-600">Factors Determining EPI</h1>
          <p className="font-extralight text-white">
            The energy consumption of a building is function of its
            utilization,aging, operational and maintenance propositions. Simple
            EPI does not take into account physical, location and operational
            characteristics. Hence a regression-based methodology has been used.
          </p>
          <p className="mt-6 text-white font-bold">
            The study reveals that energy consumption by 3 shift office
            buildings and multi-speciality hospitals is higher, approx. 350
            Kwh/Sqm /yr.
          </p>
        </div>
        <div className="w-full p-4 lg:w-1/2">
          <img
            src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/EPI-chart.png?w=969&ssl=1"
            alt="map"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Factors;
