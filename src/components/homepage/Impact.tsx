import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="bg-black/70 ring-2 ring-green-600 shadow-lg py-4 rounded-md p-6 text-center">
      <h3 className="text-green-600 text-5xl font-bold">{value}</h3>
      <p className="text-white text-lg mt-2">{label}</p>
    </div>
  );
};

const Impact: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/stats-home-page.jpg?fit=1443%2C557&ssl=1')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col lg:flex-row mx-auto px-6 py-16">
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-center text-center text-white">
          <img src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/smc-logo-white.png?fit=248%2C81&ssl=1" alt="piv"/>
          <p className='text-[12px] text-left'>Leading the way in Facility Excellence</p>
          <p className="text-lg text-left mt-4">Pioneering Sustainable Facility Solutions for a Better Tomorrow</p>
        </div>
        <div className="lg:w-1/2 w-full mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <StatCard value="303" label="Industry-Leading Technology Partners" />
          <StatCard value="30" label="Branch Offices" />
          <StatCard value="35k+" label="Employees" />
          <StatCard value="650" label="Clients" />
        </div>
      </div>
    </section>
  );
};

export default Impact;
