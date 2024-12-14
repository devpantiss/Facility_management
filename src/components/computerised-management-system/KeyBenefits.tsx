import React from 'react'

const KeyBenefits: React.FC = () => {
    const benefits = [
        {
          title: "Improved asset life cycle",
          img: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/cmms-ben-01.png?fit=51%2C51&ssl=1",
        },
        {
          title: "Fault detection & diagnostics",
          img: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/cmms-ben-02.png?fit=51%2C51&ssl=1",
        },
        {
          title: "Utility tracking & benchmarking",
          img: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/cmms-ben-03.png?fit=51%2C51&ssl=1",
        },
        {
          title: "Energy analytics & BI",
          img: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/12/cmms-ben-04.png?fit=48%2C51&ssl=1",
        },
        {
          title: "Reduced repair & maintenance cost",
          img: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/cmms-05-1.png?fit=51%2C51&ssl=1",
        },
      ];
  return (
    <div className='container mx-auto py-12 px-4'>
        <div className='flex justify-center items-center'>
            <h2 className='text-4xl mb-4'>Key Benefits</h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
            {benefits.map((benefit, index) => (
                <div key={index} className='bg-green-300/30 rounded-md border-[1px] flex flex-col justify-center items-center border-[#006873] p-4'>
                    <img src={benefit.img} alt={benefit.title}/>
                    <p className='text-center'>{benefit.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default KeyBenefits