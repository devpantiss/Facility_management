import React from 'react'
import Hero from '../../components/payroll/Hero'
import Feature from '../../components/payroll/Feature'
import StepSection from '../../components/payroll/Steps'
import Process from '../../components/payroll/Process'
import Cards from '../../components/payroll/Cards'
import Partners from '../../components/payroll/Partners'

const StaffingAndPayrolling:React.FC = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <StepSection />
      <Process />
      <Cards />
      <Partners />
    </div>
  )
}

export default StaffingAndPayrolling