import React from "react";

// Image imports (replace with real paths)

const challenges = [
  {
    id: 1,
    title: "Safety & Security of Residents",
    image:
      "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/residential-1.jpg?fit=819%2C546&ssl=1",
  },
  {
    id: 2,
    title: "Unprofessional Hospitality Services",
    image:
      "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/residential-2.jpg?fit=819%2C546&ssl=1",
  },
  {
    id: 3,
    title: "Lower Real Estate Value",
    image:
      "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/residential-4.jpg?fit=848%2C566&ssl=1",
  },
  {
    id: 4,
    title: "High CAM cost",
    image:
      "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/residential-3.jpg?fit=819%2C546&ssl=1",
  },
];

const Challenges: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          We understand the challenges of residential facilities
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {challenges.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg cursor-pointer shadow-lg"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transform transition duration-500 group-hover:scale-110 group-hover:brightness-75"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/80 to-transparent opacity-100 group-hover:opacity-100 transition duration-500">
                <p className="text-white text-base leading-tight font-semibold">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
