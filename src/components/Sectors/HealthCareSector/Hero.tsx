import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://smc-india.com/wp-content/uploads/2024/01/Healthcare.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Facility Management for the Healthcare Sector
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Patient experience is the foundation, safety is the shield, and recovery is the beacon of hope in our healthcare mission.
        </p>

        {/* Statistics */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          {/* Stat Card 1 */}
          <div className="bg-green-900 p-6 rounded-lg">
            <h2 className="text-3xl font-bold">350+</h2>
            <p className="text-sm">Healthcare Delivery Units</p>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-green-900 p-6 rounded-lg">
            <h2 className="text-3xl font-bold">18,000+</h2>
            <p className="text-sm">Beds Serviced</p>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-green-900 p-6 rounded-lg">
            <h2 className="text-3xl font-bold">60+</h2>
            <p className="text-sm">Hospitals</p>
          </div>

          {/* Stat Card 4 */}
          <div className="bg-green-900 p-6 rounded-lg">
            <h2 className="text-3xl font-bold">6,000+</h2>
            <p className="text-sm">Skilled Workforce</p>
          </div>
        </div>

        {/* Hospital Logos */}
        {/* <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
          <img src="sevenhills.png" alt="SevenHills Hospital" className="h-12 md:h-16 object-contain" />
          <img src="hcg.png" alt="HCG" className="h-12 md:h-16 object-contain" />
          <img src="care.png" alt="Care Hospital" className="h-12 md:h-16 object-contain" />
          <img src="anup.png" alt="Anup Institute" className="h-12 md:h-16 object-contain" />
          <img src="kokilaben.png" alt="Kokilaben Hospital" className="h-12 md:h-16 object-contain" />
          <img src="apollomedics.png" alt="ApolloMedics" className="h-12 md:h-16 object-contain" />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
