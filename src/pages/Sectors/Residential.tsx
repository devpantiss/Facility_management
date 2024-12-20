import React from 'react'
import Hero from '../../components/Sectors/ResidentialSector/Hero'
import Challenges from '../../components/Sectors/ResidentialSector/Challenges'
import InnovativeSolutions from '../../components/Sectors/ResidentialSector/InnovativeSolutions'
import Consultation from '../../components/homepage/Consultation'
import Testimonials from '../../components/Sectors/ResidentialSector/Testimonials'
import Clients from '../../components/Sectors/ResidentialSector/Clients'

const Residential: React.FC = () => {
  return (
    <div>
      <Hero />
      <Challenges />
      <InnovativeSolutions />
      <Consultation />
      <Testimonials />
      <Clients />
    </div>
  )
}

export default Residential