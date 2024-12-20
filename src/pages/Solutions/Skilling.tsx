import React from 'react'
import Hero from '../../components/Solutions/skilling/Hero'
import SpecializedTrainingPrograms from '../../components/Solutions/skilling/SpecializedTrainingPrograms'
import TechInSkilling from '../../components/Solutions/skilling/TechInSkilling'
import AuditAndCelebration from '../../components/Solutions/skilling/AuditAndCelebration'
import JMTReport from '../../components/Solutions/skilling/JMTReport'

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