import React from 'react'

const TagLine: React.FC = () => {
  return (
    <div className='relative bg-black lg:h-[50vh] flex justify-center items-center'>
        <img src='https://3ionetra.in/images/home/banner1/flower-pattern.svg' alt="" className='absolute top-0 left-0 w-32 h-32 lg:h-64 lg:w-64'/>
        <img src='https://3ionetra.in/images/home/banner1/flower-pattern.svg' alt="" className='absolute top-0 right-0 rotate-90 w-32 h-32 lg:h-64 lg:w-64'/>

        <p className='max-w-4xl px-12 mt-32 text-center text-white font-semibold'>Facility management plays a pivotal role in safeguarding the sanctity and longevity of temples, which goes beyond mere physical maintenance to uphold the spiritual and communal essence of these sacred spaces. The meticulous upkeep of infrastructure, including building maintenance, repair, and restoration, ensures that the temple remains a structurally sound haven for worshipers. Environmental and grounds management contribute to a serene atmosphere, where landscaping and cleanliness enhance the spiritual experience. Security, safety, and community engagement initiatives establish a sense of trust and inclusivity, fostering positive interactions within the temple community. Administrative practices, such as inventory management and documentation, not only streamline operations but also preserve the historical and cultural significance of the temple.</p>
    </div>
  )
}

export default TagLine