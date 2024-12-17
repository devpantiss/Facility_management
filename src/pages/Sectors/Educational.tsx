import React from 'react'
import Hero from '../../components/EducationSector/Hero'
import Challenges from '../../components/EducationSector/Challenges'
import InnovativeSolutions from '../../components/EducationSector/InnovativeSolutions'
import OurSolutions from '../../components/EducationSector/OurSolutions'

const Educational: React.FC = () => {
  return (
    <div>
      <Hero />
      <Challenges />
      <InnovativeSolutions />
      <OurSolutions />
    </div>
  )
}

export default Educational