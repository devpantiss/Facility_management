import React from 'react'
import Hero from '../../components/Solutions/integrated-facility-management/Hero'
import KeyBenefitSection from '../../components/Solutions/integrated-facility-management/KeyBenefits/KeyBenefitSection'
import TabsSection from '../../components/Solutions/integrated-facility-management/TabsSection'
import Consultation from '../../components/homepage/Consultation'

const IntegratedFacilityManagement: React.FC = () => {
  return (
    <div>
      <Hero />
      <KeyBenefitSection />
      <TabsSection />
      <Consultation />
    </div>
  )
}

export default IntegratedFacilityManagement