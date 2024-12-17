import React from 'react';

interface CardProps {
  icon: string; // Path or URL to the icon/image
  title: string; // Card title text
}

const cards: CardProps[] = [
  { icon: 'https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/edu-sol-01.png?fit=55%2C81&ssl=1', title: 'Mobile App — Parents and School' },
  { icon: 'https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/edu-sol-02.png?fit=55%2C82&ssl=1', title: 'Panic Alarm Emergency System' },
  { icon: 'https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/edu-sol-03.png?fit=81%2C81&ssl=1', title: 'Pest Management' },
  { icon: 'https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/edu-sol-04.png?fit=81%2C81&ssl=1', title: 'Disinfection & Sanitization' },
  { icon: 'https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/edu-sol-05.png?fit=70%2C82&ssl=1', title: 'Childcare Attendant' },
  { icon: 'https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/edu-sol-06.png?fit=97%2C79&ssl=1', title: 'Security & Surveillance Solutions' },
];

const OurSolutions: React.FC = () => {
  return (
    <section className="text-center py-10 px-4 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
        Our Specialized Solutions for Education Facilities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-16 h-16 mb-4"
            />
            <p className="text-lg font-medium text-gray-700">{card.title}</p>
          </div>
        ))}
      </div>
      <button className="mt-8 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300">
        Learn More
      </button>
    </section>
  );
};

export default OurSolutions;
