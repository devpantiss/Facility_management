import React from 'react';

// Image imports (replace with real paths)


const challenges = [
  {
    id: 1,
    title: 'Infection Prevention and Cross Contamination Control (HAIs)',
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734782652/national-cancer-institute-eR5-JoSw1Mo-unsplash_zoszbp.jpg",
  },
  {
    id: 2,
    title: 'Patient & Clinical Staff Satisfaction',
    image: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/healthcare-challenges-1.jpg?fit=819%2C549&ssl=1",
  },
  {
    id: 3,
    title: 'Financial Challenges, Productivity Regulations and Standards',
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734783511/linkedin-sales-solutions-0QvTyp0gH3A-unsplash_umqckc.jpg",
  },
  {
    id: 4,
    title: 'Energy Efficiency & Asset Lifecycle',
    image: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/healthcare-challenges-4.jpg?fit=819%2C546&ssl=1",
  },
  {
    id: 5,
    title: 'Sustainability & Healthier Environment',
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734784303/owen-beard-DK8jXx1B-1c-unsplash_znfbzf.jpg",
  },
];

const Challenges: React.FC = () => {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-bold text-green-600 mb-8">
          We understand the challenges of healthcare facilities
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
