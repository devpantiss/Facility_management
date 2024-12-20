import React from 'react'
import Hero from '../../components/Solutions/payroll/Hero'
import Feature from '../../components/Solutions/payroll/Feature'
import StepSection from '../../components/Solutions/payroll/Steps'
import Process from '../../components/Solutions/payroll/Process'
import Cards from '../../components/Solutions/payroll/Cards'
import Partners from '../../components/Solutions/payroll/Partners'

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