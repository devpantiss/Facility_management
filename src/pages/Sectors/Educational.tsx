import React from 'react'
import Hero from '../../components/EducationSector/Hero'
import Challenges from '../../components/EducationSector/Challenges'
import InnovativeSolutions from '../../components/EducationSector/InnovativeSolutions'
import OurSolutions from '../../components/EducationSector/OurSolutions'
import Testimonials from '../../components/EducationSector/Testimonials'
import Clients from '../../components/EducationSector/Clients'

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