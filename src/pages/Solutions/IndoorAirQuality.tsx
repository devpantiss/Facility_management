import React from 'react'
import Hero from '../../components/Solutions/indoor-air-quality/Hero'
import CommercialUV from '../../components/Solutions/indoor-air-quality/CommercialUV'
import OngoingConcern from '../../components/Solutions/indoor-air-quality/OngoingConcern'
import HowItWorks from '../../components/Solutions/indoor-air-quality/HowItWorks'
import Result from '../../components/Solutions/indoor-air-quality/Result'
import KeyBenefits from '../../components/Solutions/indoor-air-quality/KeyBenefits'
import UVD from '../../components/Solutions/indoor-air-quality/UVD'
import Consultation from '../../components/homepage/Consultation'

const IndoorAirQuality : React.FC = () => {
  return (
    <div>
      <Hero />
      <CommercialUV />
      <OngoingConcern />
      <HowItWorks />
      <Result />
      <KeyBenefits />
      <UVD />
      <Consultation />
    </div>
  )
}

export default IndoorAirQuality