import React from "react";

const EPI: React.FC = () => {
  return (
    <div className="bg-black border-b-2 border-green-600">
      <div className="container mx-auto py-8 flex justify-center items-center">
        <div className="bg-green-600 w-full max-w-6xl px-12 py-4 flex flex-col justify-center items-center rounded-md">
          <h1 className="text-3xl font-thin text-white">
            Energy Performance Index (EPI)
          </h1>
          <p className="max-w-3xl w-full text-white">
            Energy Performance Index is the key metrics used for benchmarking
            energy usage for the respective infrastructure with standardization
            of its operations. EPI is the energy used per unit area measured as
            kWh/m2/year or kWh/person/year.
          </p>
          <img
            src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/EPI-table.png?resize=1024%2C536&ssl=1"
            alt="pg"
            className="w-full mt-4 max-w-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default EPI;
