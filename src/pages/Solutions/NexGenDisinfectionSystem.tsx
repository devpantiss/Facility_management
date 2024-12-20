import React from 'react'
import Hero from '../../components/Solutions/nex-gen-disinfection/Hero'
import HowDoesItWork from '../../components/Solutions/nex-gen-disinfection/HowDoesItWork'
import OurProcess from '../../components/Solutions/nex-gen-disinfection/OurProcess'
import KeyBenefits from '../../components/Solutions/nex-gen-disinfection/KeyBenefits'
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