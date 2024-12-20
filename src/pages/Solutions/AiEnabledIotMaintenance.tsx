import React from 'react'
import Hero from '../../components/Solutions/computerised-management-system/Hero'
import Description from '../../components/Solutions/computerised-management-system/Description'
import Problems from '../../components/Solutions/computerised-management-system/Problems'
import KeyBenefits from '../../components/Solutions/computerised-management-system/KeyBenefits'
import CMMSSection from '../../components/Solutions/computerised-management-system/CMMSSection'
import Consultation from '../../components/homepage/Consultation'

const ComputerisedManagementSystem: React.FC = () => {
  return (
    <div>
      <Hero />
      <Description />
      <Problems />
      <KeyBenefits />
      <CMMSSection />
      <Consultation />
    </div>
  )
}

export default ComputerisedManagementSystem