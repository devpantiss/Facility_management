import React from 'react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <MagnifyingGlassIcon />,
    title: 'Diagnose Point of Energy Loss',
    description: '',
  },
  {
    icon: <GearIcon />,
    title: 'Control Loss of Energy and Cost of Operations',
    description: '',
  },
  {
    icon: <LightBulbIcon />,
    title: 'Improve Energy Sustainability',
    description: '',
  },
  {
    icon: <WarningIcon />,
    title: 'Reduce System Decay Due to Over Heating/Over Current',
    description: '',
  },
  {
    icon: <AlertIcon />,
    title: 'Reduce Risk of Sudden System Failure and Working Life',
    description: '',
  },
  {
    icon: <BarChartIcon />,
    title: 'Improve Productivity and BCP',
    description: '',
  },
];

// Icons
function MagnifyingGlassIcon() {
  return <span className="text-4xl">🔍</span>;
}

function GearIcon() {
  return <span className="text-4xl">⚙️</span>;
}

function LightBulbIcon() {
  return <span className="text-4xl">💡</span>;
}

function WarningIcon() {
  return <span className="text-4xl">⚠️</span>;
}

function AlertIcon() {
  return <span className="text-4xl">🚨</span>;
}

function BarChartIcon() {
  return <span className="text-4xl">📊</span>;
}

const Benefits: React.FC = () => {
  return (
    <section className="py-12 bg-black border-b-2 border-green-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-8">Key Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border border-green-400 rounded-lg p-6 bg-transparent shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 text-yellow-500">{benefit.icon}</div>
              <h3 className="text-lg text-white font-semibold">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
