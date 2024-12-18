import React from "react";

const ManagementSolutions: React.FC = () => {
  const solutions = [
    {
      title: "Hydro Ball Automatic Tube Cleaning",
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/eam-sol-01.png?fit=80%2C81&ssl=1", // Replace with the actual icon URL
    },
    {
      title: "Smart Sensor Placement",
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/eam-sol-02.png?fit=80%2C81&ssl=1",
    },
    {
      title: "Smart AHU Solution",
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/eam-sol-03.png?fit=80%2C81&ssl=1",
    },
    {
      title: "Solar Panel Solution Thermography",
      icon: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/eam-sol-04.png?fit=80%2C81&ssl=1",
    },
  ];

  return (
    <section className="w-full py-16 bg-black border-b-2 border-green-600 text-center">
      {/* Section Heading */}
      <h2 className="text-3xl text-green-600 font-semibold mb-8">Our Energy Management Solutions</h2>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="border border-green-600 rounded-md p-6 hover:shadow-lg transition duration-300"
          >
            <img
              src={solution.icon}
              alt={solution.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <p className="text-white font-medium">{solution.title}</p>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      <div className="mt-8">
        <button className="bg-[#00C06C] text-white font-medium px-6 py-3 rounded-md hover:bg-[#00A85E] transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default ManagementSolutions;
