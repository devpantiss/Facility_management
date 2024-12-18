import React, { useState } from "react";

const tabsData = [
  {
    id: "adhyapan",
    title: "ADHYAPAN",
    heading: "ADHYAPAN – Train the Trainer Program",
    description:
      "To train the trainers on how to deliver the sessions effectively, TNI, evaluation techniques, Maintaining Quality Standards at sites & learn about Adult Learning Principles.",
    image: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/train-the-trainer.jpg?w=1024&ssl=1", // Replace with actual image link
  },
  {
    id: "saksham",
    title: "SAKSHAM",
    heading: "SAKSHAM V2.0 – Creating Champions in Retail & Healthcare",
    description:
      "The word ‘SAKSHAM’ means ‘to be capable’ – ATMANIRBHAR. We are aligned with our country’s new policy of ATMANIRBHAR BHARAT. To prepare the SME’s who shall be able to do site setup in their respective domains.",
    image: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/SAKSHAM.jpg?w=1024&ssl=1", // Replace with actual image link
  },
  {
    id: "parakh",
    title: "PARAKH",
    heading: "PARAKH – TNI & Assessment",
    description:
      "With the Aim to Analyse the Training  & Development needs and ensure that employees are learning. We have started with the evaluation of staff at Premium sites. This shall help us analyse the gaps in training and shall create scope of improvement.",
    image: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/assessment.jpg?w=1024&ssl=1", // Replace with actual image link
  },
  {
    id: "trainingChamp",
    title: "Training Champ Program",
    heading: "Training Champ – Championing Workforce Skills",
    description:
      "An incentive-based program where supervisors are groomed and promoted as Training Champ, and they conduct regular on-the-job training & development sessions for the housekeeping staff at the unit level.",
    image: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/training-champ.jpg?w=1024&ssl=1", // Replace with actual image link
  },
  {
    id: "fireSafety",
    title: "Fire Safety & First Aid Trainings",
    heading: "Fire Safety & First Aid – Safety First, Always",
    description:
      "Our team members are trained and certified by 3rd Party firms specialized in their field to ensure our staff is well-versed in basic safety processes in a facility.",
    image: "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/basic-safety-processes.jpg?w=1024&ssl=1", // Replace with actual image link
  },
];

const SpecializedTrainingPrograms: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const activeContent = tabsData.find((tab) => tab.id === activeTab);

  return (
    <section className="p-8 md:p-12 bg-black">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-green-600">
          Specialized Training Programs
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center border-b border-green-600 mb-8">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 md:px-6 text-white font-medium ${
              activeTab === tab.id
                ? "text-green-600 border-b-2 border-green-600"
                : "hover:text-green-500"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeContent && (
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              {activeContent.heading}
            </h3>
            <p className="text-white">{activeContent.description}</p>
          </div>
          <div className="md:w-1/2">
            <img
              src={activeContent.image}
              alt={activeContent.title}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default SpecializedTrainingPrograms;
