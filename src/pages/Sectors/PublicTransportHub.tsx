import React from 'react'
import Hero from '../../components/PublicTransport/Hero'
import Challenges from '../../components/PublicTransport/Challenges'
import IotBasedCare from '../../components/PublicTransport/IoTBasedCare'

const PublicTransportHub: React.FC = () => {
  return (
    <div>
      <Hero />
      <Challenges />
      <IotBasedCare />
    </div>
  )
}

export default PublicTransportHub