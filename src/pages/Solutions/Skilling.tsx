import React from 'react'
import Hero from '../../components/skilling/Hero'
import SpecializedTrainingPrograms from '../../components/skilling/SpecializedTrainingPrograms'
import TechInSkilling from '../../components/skilling/TechInSkilling'
import AuditAndCelebration from '../../components/skilling/AuditAndCelebration'
import JMTReport from '../../components/skilling/JMTReport'

const Skilling: React.FC = () => {
  return (
    <div>
        <Hero />
        <SpecializedTrainingPrograms />
        <TechInSkilling />
        <AuditAndCelebration />
        <JMTReport />
    </div>
  )
}

export default Skilling