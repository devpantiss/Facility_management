import React from 'react'
import Hero from '../../components/ResidentialSector/Hero'
import Challenges from '../../components/ResidentialSector/Challenges'
import InnovativeSolutions from '../../components/ResidentialSector/InnovativeSolutions'
import Consultation from '../../components/homepage/Consultation'
import Testimonials from '../../components/ResidentialSector/Testimonials'

const Residential: React.FC = () => {
  return (
    <div>
      <Hero />
      <Challenges />
      <InnovativeSolutions />
      <Consultation />
      <Testimonials />
    </div>
  )
}

export default Residential