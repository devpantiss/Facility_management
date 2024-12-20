import React from "react";

const Challenges: React.FC = () => {
  const challenges = [
    {
      id: 1,
      title: "Parent Expectation for Better Safety",
      image:
        "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/education-4.jpg?fit=800%2C532&ssl=1",
    },
    {
      id: 2,
      title: "Safe and Secure Surroundings",
      image:
        "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/education-2.jpg?fit=800%2C534&ssl=1",
    },
    {
      id: 3,
      title: "Clean & Infection Controlled",
      image:
        "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/education-1.jpg?fit=800%2C534&ssl=1",
    },
    {
      id: 4,
      title: "Real Time Tracking & Updates of Student",
      image:
        "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/education-3.jpg?fit=800%2C534&ssl=1",
    },
  ];
  return (
    <div className="relative flex lg:flex-row flex-col py-8 gap-x-6 px-8 lg:pl-8 lg:px-0 justify-start h-full lg:h-[90vh] bg-black border-b-2 border-orange-400">
      <div className="lg:w-3/5 w-full">
        <h1 className="text-4xl font-bold text-orange-400 mb-6">
          We understand the challenges of transport hub facilities
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
      <div className="relative lg:w-2/5 w-full">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734516618/Untitled_design__2_-removebg-preview_2_zaye6a.png"
          alt="fg"
          className="absolute hidden lg:block w-full right-0"
        />
      </div>
    </div>
  );
};

export default Challenges;
