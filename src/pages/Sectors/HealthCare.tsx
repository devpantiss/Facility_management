import React from 'react'
import Hero from '../../components/Sectors/HealthCareSector/Hero'
import Challenges from '../../components/Sectors/HealthCareSector/Challenges'
import IotBasedCare from '../../components/Sectors/HealthCareSector/IotBasedCare'
import SpecializedSolution from '../../components/Sectors/HealthCareSector/SpecializedSolution'
import PorterSection from '../../components/Sectors/HealthCareSector/PorterSection'
import IQMSSection from '../../components/Sectors/HealthCareSector/IQMSSection'
import SSDPSection from '../../components/Sectors/HealthCareSector/SSDPSection'
import CMMSSection from '../../components/Sectors/HealthCareSector/CMMSSection'
import Testimonials from '../../components/Sectors/HealthCareSector/Testimonials'

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
      <Testimonials />
    </div>
  )
}

export default HealthCare