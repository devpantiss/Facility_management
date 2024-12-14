import React from 'react'
import Hero from '../../components/nex-gen-disinfection/Hero'
import HowDoesItWork from '../../components/nex-gen-disinfection/HowDoesItWork'
import OurProcess from '../../components/nex-gen-disinfection/OurProcess'
import KeyBenefits from '../../components/nex-gen-disinfection/KeyBenefits'
import Consultation from '../../components/homepage/Consultation'

const NexGenDisinfectionSystem: React.FC = () => {
  return (
    <div>
      <Hero />
      <HowDoesItWork />
      <OurProcess />
      <KeyBenefits />
      <Consultation />
    </div>
  )
}

export default NexGenDisinfectionSystem