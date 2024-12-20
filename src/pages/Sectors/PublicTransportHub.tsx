import React from 'react'
import Hero from '../../components/Sectors/PublicTransport/Hero'
import Challenges from '../../components/Sectors/PublicTransport/Challenges'
import IotBasedCare from '../../components/Sectors/PublicTransport/IoTBasedCare'
import Testimonials from '../../components/Sectors/PublicTransport/Testimonials'
import Clients from '../../components/Sectors/PublicTransport/Clients'

const PublicTransportHub: React.FC = () => {
  return (
    <div>
      <Hero />
      <Challenges />
      <IotBasedCare />
      <Testimonials />
      <Clients />
    </div>
  )
}

export default PublicTransportHub