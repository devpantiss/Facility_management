import React from 'react'
import Hero from '../../components/Solutions/Plumbing/Hero'
import Benefits from '../../components/Solutions/Plumbing/Benefits'
import Services from '../../components/Solutions/Plumbing/Services'
import Consultation from '../../components/homepage/Consultation'

const Plumbing: React.FC = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <Services />
      <Consultation />
    </div>
  )
}

export default Plumbing