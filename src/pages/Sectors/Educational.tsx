import React from 'react'
import Hero from '../../components/Sectors/EducationSector/Hero'
import Challenges from '../../components/Sectors/EducationSector/Challenges'
import InnovativeSolutions from '../../components/Sectors/EducationSector/InnovativeSolutions'
import OurSolutions from '../../components/Sectors/EducationSector/OurSolutions'
import Testimonials from '../../components/Sectors/EducationSector/Testimonials'
import Clients from '../../components/Sectors/EducationSector/Clients'

const Educational: React.FC = () => {
  return (
    <div>
      <Hero />
      <Challenges />
      <InnovativeSolutions />
      <OurSolutions />
      <Testimonials />
      <Clients />
    </div>
  )
}

export default Educational