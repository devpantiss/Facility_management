import React from 'react'
import CMMSSlider from './CMMSSlider';

const CMMSSection: React.FC = () => {
    const slides = [
        {
            image: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/our-cmms-03.png?fit=74%2C81&ssl=1",
            title: "Help Desk Management",
        },
        {
            image: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/our-cmms-04.png?fit=66%2C81&ssl=1",
            title: "Work Order Management",
        },
        {
            image: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/our-cmms-05.png?fit=81%2C81&ssl=1",
            title: "Stores and Spares Management",
        },
        {
            image: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/our-cmms-06.png?fit=81%2C81&ssl=1",
            title: "Attendance Management",
        },
        {
            image: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/our-cmms-03.png?fit=74%2C81&ssl=1",
            title: "Help Desk Management",
        },
        {
            image: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/our-cmms-07.png?fit=81%2C81&ssl=1",
            title: "MIS/MMR/SLA Reporting",
        },
        {
            image: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/our-cmms-01.png?fit=77%2C81&ssl=1",
            title: "Asset Management",
        },
    ];
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6 bg-black">
        <div>
            <h2 className='text-4xl text-green-600'>Our Computerised Maintenance Management System</h2>
        </div>
        <CMMSSlider slides={slides}/>
        <div>
            <button className="px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-[10px] text-white">Learn more</button>
        </div>
    </div>
  )
}

export default CMMSSection