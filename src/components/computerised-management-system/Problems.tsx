import React from "react";

const Problems: React.FC = () => {
  const problems = [
    {
      title: "Manual Delivery Approach",
      img: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/cmms-1.png?fit=101%2C101&ssl=1",
    },
    {
      title: "Only Manpower Services",
      img: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/cmms-4.png?fit=101%2C101&ssl=1",
    },
    {
      title: "Less/No Technology Intervention",
      img: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/cmms-5.png?fit=101%2C101&ssl=1",
    },
    {
      title: "Service Approach Without Solutions",
      img: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/cmms-7.png?fit=101%2C101&ssl=1",
    },
    {
      title: "Dependency On Paperwork for Documentation",
      img: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/cmms-9.png?fit=101%2C101&ssl=1",
    },
    {
      title: "No Digital Records, Real Time Data/Records",
      img: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/cmms-2-2.png?fit=101%2C101&ssl=1",
    },
    {
      title: "Data Accuracy & Speed Concern",
      img: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/cmms-3.png?fit=101%2C101&ssl=1",
    },
    {
      title: "Operations Less Efficient & Landing Costly",
      img: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/cmms-10.png?fit=101%2C101&ssl=1",
    },
    {
      title: "Delayed Reporting and Problem Time Consuming",
      img: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/cmms-6.png?fit=101%2C101&ssl=1",
    },
    {
      title: "Dependency On Office for Data/Information",
      img: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/cmms-8.png?fit=101%2C101&ssl=1",
    },
    {
      title: "Manual Data/Consumption Comparison & Analysis",
      img: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/cmms-11.png?fit=101%2C101&ssl=1",
    },
  ];
  return (
    <div className="bg-[#006873]">
      <div className="container text-white mx-auto flex flex-col lg:flex-row px-8 py-6">
        <div className="lg:w-2/5 w-full flex justify-center text-4xl items-center">
          <p className="max-w-lg mb-4">Problems Of Traditional FM Services</p>
        </div>
        <div className="lg:w-3/5 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="border-[1px] p-4 border-white gap-x-6 flex md:flex-row flex-row lg:flex-col rounded-md"
              >
                <img src={problem.img} className="w-8" alt={problem.title} />{" "}
                <p className="text-[12px] mt-3">{problem.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;
