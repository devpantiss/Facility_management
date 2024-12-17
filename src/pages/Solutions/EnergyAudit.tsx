import React from 'react'
import Hero from '../../components/energy-audit/Hero'
import EPI from '../../components/energy-audit/EPI'
import Factors from '../../components/energy-audit/Factors'
import Proposition from '../../components/energy-audit/Proposition'
import ManagementSolutions from '../../components/energy-audit/ManagementSolutions'
import EnergyManagement from '../../components/energy-audit/EnergyManagement'
import Benefits from '../../components/energy-audit/Benefits'
import Consultation from '../../components/homepage/Consultation'

const EnergyAudit: React.FC = () => {
  return (
    <div>
        <Hero />
        <EPI />
        <Factors />
        <Proposition />
        <ManagementSolutions />
        <EnergyManagement />
        <Benefits />
        <Consultation />
    </div>
  )
}

export default EnergyAudit