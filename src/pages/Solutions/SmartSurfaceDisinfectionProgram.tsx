import React from 'react'
import Hero from '../../components/surface-disinfection-program/Hero'
import HowDoesItWork from '../../components/surface-disinfection-program/HowDoesItWork'
import KeyBenefits from '../../components/surface-disinfection-program/KeyBenefits'
import Tabs from '../../components/surface-disinfection-program/Tabs'
import Consultation from '../../components/homepage/Consultation'

const SmartSurfaceDisinfectionProgram: React.FC= () => {
  return (
    <div>
      <Hero />
      <HowDoesItWork />
      <KeyBenefits />
      <Tabs />
      <Consultation />
    </div>
  )
}

export default SmartSurfaceDisinfectionProgram