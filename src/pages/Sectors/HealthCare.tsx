import React from 'react'
import Hero from '../../components/HealthCareSector/Hero'
import Challenges from '../../components/HealthCareSector/Challenges'
import IotBasedCare from '../../components/HealthCareSector/IotBasedCare'
import SpecializedSolution from '../../components/HealthCareSector/SpecializedSolution'
import PorterSection from '../../components/HealthCareSector/PorterSection'
import IQMSSection from '../../components/HealthCareSector/IQMSSection'
import SSDPSection from '../../components/HealthCareSector/SSDPSection'
import CMMSSection from '../../components/HealthCareSector/CMMSSection'

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
    </div>
  )
}

export default HealthCare