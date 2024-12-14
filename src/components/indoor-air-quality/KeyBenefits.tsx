import React from "react";

const KeyBenefits: React.FC = () => {
  const benefits = [
    {
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/uvg-1a.png?fit=83%2C83&ssl=1", // Replace with actual icon URL
      title: "Improved CFM",
      description:
        "Our installed UVGI system does not allow any biofilm creation over the evaporator coil/ cooling coil's surface. It effectively maintains better coil clearance to the flow of air, thus improving CFM on the floor.",
    },
    {
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/uvgi_icon2.png?fit=83%2C83&ssl=1", // Replace with actual icon URL
      title: "Improved Indoor Air Quality",
      description:
        "Used air from the office floor, flowing through the duct and reaching AHU. The installed UVGI system at AHU disinfects this return air and improves the quality of supplied air on the working floor.",
    },
    {
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/uvg-6a.png?fit=83%2C83&ssl=1", // Replace with actual icon URL
      title: "Reducing the Foul Odour",
      description:
        "UVGI with adequate UV intensity ensures nil residual odours post killing the microorganism from return air.",
    },
    {
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/uvgi_icon4.png?fit=83%2C83&ssl=1", // Replace with actual icon URL
      title: "Energy Saving and Efficiency",
      description:
        "With our installed UVGI system, there is no biofilm/clog over the coil surface. Hence heat exchange goes high; thus the compressor target gets reduced to meet the required floor temperature. The AHU motor target also gets reduced with improved CFM to add energy savings.",
    },
    {
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/uvg-5a.png?fit=83%2C83&ssl=1", // Replace with actual icon URL
      title: "Elevated Cooling Efficiency",
      description:
        "Due to continuous UV exposure of the cooling coil, there is zero biofilm/dust/fungi generation over the coil surface, thus keeping the coil clean and allowing optimum heat exchange. It improves the cooling efficiency.",
    },
    {
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/uvgi_icon6.png?fit=83%2C83&ssl=1", // Replace with actual icon URL
      title: "Total Germicidal Eradication",
      description:
        "The high-quality UVGI installation maintains adequate UV dose, thus ensuring highly effective Germicidal Eradication.",
    },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl lg:text-4xl font-semibold text-gray-800 mb-8">
          Key Benefits
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-yellow-100 rounded-full mb-4">
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-16 h-16"
                />
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
