import React from "react";

interface Item {
  id: number;
  subtitle: string;
  imageUrl: string;
}

const items: Item[] = [
  {
    id: 1,
    subtitle: "Traditional cleaning to Smarter Cleaning",
    imageUrl: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ssdp-hk-1-1.png?w=521&ssl=1",
  },
  {
    id: 2,
    subtitle: "Centric Resources to Planned Resources",
    imageUrl: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ssdp-hk-2-1.png?w=519&ssl=1",
  },
  {
    id: 3,
    subtitle: "Cleaning to Hygiene",
    imageUrl: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/ssdp-hk-3-1.png?w=520&ssl=1",
  },
];

const HowDoesItWork: React.FC = () => {
  return (
    <section className="text-center bg-black p-6 md:p-12">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl text-green-600 font-semibold mb-2">
        How Does It Work?
      </h2>
      <p className="text-white mb-8">
        Transitioning from Conventional Cleaning Methods involving Mops and
        Buckets to the Mechanized Smart Cleaning approach.
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="">
              <img
                src={item.imageUrl}
                alt={item.subtitle}
                className="w-full h-52"
              />
            </div>
            <h3 className="mt-4 font-medium text-white text-lg">{item.subtitle}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowDoesItWork;
