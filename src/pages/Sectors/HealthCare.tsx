import React from 'react'
import Hero from '../../components/HealthCareSector/Hero'
import Challenges from '../../components/HealthCareSector/Challenges'
import IotBasedCare from '../../components/HealthCareSector/IotBasedCare'
import SpecializedSolution from '../../components/HealthCareSector/SpecializedSolution'
import PorterSection from '../../components/HealthCareSector/PorterSection'
import IQMSSection from '../../components/HealthCareSector/IQMSSection'
import SSDPSection from '../../components/HealthCareSector/SSDPSection'
import CMMSSection from '../../components/HealthCareSector/CMMSSection'
import BMSSection from '../../components/HealthCareSector/WirelessBMS'

const HealthCare:React.FC = () => {
  return (
    <div>
      <Hero />
      <Challenges />
      <IotBasedCare />
      <SpecializedSolution />
      <PorterSection />
      <IQMSSection />
      <SSDPSection />
      <CMMSSection />
      <BMSSection />
    </div>
  )
}

export default HealthCare