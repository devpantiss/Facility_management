import React from 'react'
import Hero from '../../components/Solutions/energy-audit/Hero'
import EPI from '../../components/Solutions/energy-audit/EPI'
import Factors from '../../components/Solutions/energy-audit/Factors'
import Proposition from '../../components/Solutions/energy-audit/Proposition'
import ManagementSolutions from '../../components/Solutions/energy-audit/ManagementSolutions'
import EnergyManagement from '../../components/Solutions/energy-audit/EnergyManagement'
import Benefits from '../../components/Solutions/energy-audit/Benefits'
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