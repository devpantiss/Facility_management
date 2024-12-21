import React from 'react'
import HeroSection from '../components/homepage/HeroSection'
import Poster from '../components/homepage/Poster'
import Brands from '../components/homepage/Brands'
import Impact from '../components/homepage/Impact'
import Consultation from '../components/homepage/Consultation'
// import PhoneOutline from '../components/common/PhoneOutline'

const HomePage: React.FC = () => {
  return (
    <div>
        <HeroSection />
        {/* <PhoneOutline /> */}
        <Poster />
        <Brands />
        <Impact />
        <Consultation />
    </div>
  )
}

export default HomePage