import React from 'react'
import Hero from '../../components/indoor-air-quality/Hero'
import CommercialUV from '../../components/indoor-air-quality/CommercialUV'
import OngoingConcern from '../../components/indoor-air-quality/OngoingConcern'
import HowItWorks from '../../components/indoor-air-quality/HowItWorks'
import Result from '../../components/indoor-air-quality/Result'
import KeyBenefits from '../../components/indoor-air-quality/KeyBenefits'
import UVD from '../../components/indoor-air-quality/UVD'
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