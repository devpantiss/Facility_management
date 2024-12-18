import React from 'react'
import Hero from '../../components/PublicTransport/Hero'
import Challenges from '../../components/PublicTransport/Challenges'
import IotBasedCare from '../../components/PublicTransport/IoTBasedCare'
import Testimonials from '../../components/PublicTransport/Testimonials'

const PublicTransportHub: React.FC = () => {
  return (
    <div>
      <Hero />
      <Challenges />
      <IotBasedCare />
      <Testimonials />
    </div>
  )
}

export default PublicTransportHub