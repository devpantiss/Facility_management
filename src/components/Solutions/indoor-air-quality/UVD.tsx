import React from "react";

const UVD: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-4 md:p-10 max-w-7xl mx-auto">
      {/* Text Content */}
      <div className="md:w-1/2 text-left">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          UVGI Disinfection (Ultra Duct)
        </h1>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Ultra-Duct helps in treating the air inside the duct, also reducing
          the possibilities of microbiological germinations.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          It works by restricting any virus to obtain living cells for mutation
          inside the duct. Since the ducts attract moisture inside the AHU duct,
          this causes a rise in the germination of Fungi, Bacteria, Germs, and
          many other biological microorganisms. This sufficiently contaminates
          the air flowing through the duct. With Ultra-Duct, no contaminants
          pass through the air and plague indoor air.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The contaminants from the work floor and air duct are added to the
          indoor air during cooling. These contaminants are hazardous to human
          beings. When such contaminants enter human lungs, it carries with them
          flu/respiratory disorder germs that result in diseases like asthma,
          chronic cough, fatigue, etc.
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ultra-duct-1.jpg?w=437&ssl=1"
          alt="UVGI Disinfection Ultra Duct"
          className="rounded-lg shadow-lg w-full max-w-lg"
        />
      </div>
    </div>
  );
};

export default UVD;
