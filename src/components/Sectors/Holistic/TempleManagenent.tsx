import React from "react";
import { GiByzantinTemple } from "react-icons/gi";
import { FaDoorOpen } from "react-icons/fa6";
import { MdOutlineConstruction, MdWash, MdPestControl, MdGroups, MdGroups3, MdInventory } from "react-icons/md";
import { GiAutoRepair, GiBroom } from "react-icons/gi";
import { FaHandshake, FaCheckCircle } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { PiSecurityCameraFill } from "react-icons/pi";

const TempleManagement: React.FC = () => {
  const data = [
    {
      title: "Infrastructure and Facility Maintenance",
      sections: [
        {
          subtitle: "Building Maintenance, Repair & Restoration",
          icon: <GiByzantinTemple />, 
          content:
            "Regularly inspect and maintain the temple structure, addressing wear and tear to ensure its structural integrity.",
        },
        {
          subtitle: "Rooms & Hall Management",
          icon: <FaDoorOpen />,
          content:
            "Efficiently manage event planning, space utilization, and amenities in temple rooms and halls.",
        },
        {
          subtitle: "Infrastructure Management",
          icon: <MdOutlineConstruction />,
          content:
            "Maintain and optimize equipment, technology infrastructure, and accessibility features within the temple.",
        },
        {
          subtitle: "Maintenance & Repair",
          icon: <GiAutoRepair />,
          content:
            "Implement preventive maintenance programs and promptly address repairs to key infrastructure elements.",
        },
      ],
    },
    {
      title: "Environmental and Grounds Management",
      sections: [
        {
          subtitle: "Ground Keeping",
          icon: <GiBroom />, 
          content:
            "Maintain the temple grounds by tending to landscaping, pathways, and walkways, adapting practices to seasonal changes.",
        },
        {
          subtitle: "Hygiene, Cleaning & Sanitization",
          icon: <MdWash />, 
          content:
            "Establish routine cleaning schedules, implement sanitization practices, and emphasize waste management for a clean and hygienic environment.",
        },
        {
          subtitle: "Pest Control",
          icon: <MdPestControl />, 
          content:
            "Conduct regular inspections and implement integrated pest management strategies to address and prevent pest issues.",
        },
      ],
    },
    {
      title: "Security, Safety, and Community Engagement",
      sections: [
        {
          subtitle: "Security and Safety",
          icon: <PiSecurityCameraFill />, 
          content:
            "Ensure the proper functioning of security systems, emergency communication, and personnel training to maintain a secure environment.",
        },
        {
          subtitle: "Visitor Services",
          icon: <MdGroups />, 
          content:
            "Provide information desks, visitor amenities, and efficient queue management for a positive visitor experience.",
        },
        {
          subtitle: "Community Engagement",
          icon: <MdGroups3 />, 
          content:
            "Organize community programs, educational workshops, and cultural events to engage with the temple community.",
        },
        {
          subtitle: "Collaboration with Local Law Enforcement",
          icon: <FaHandshake />, 
          content:
            "Collaborate with local law enforcement for enhanced security through community policing initiatives and joint training exercises.",
        },
      ],
    },
    {
      title: "Administrative and Documentation Practices",
      sections: [
        {
          subtitle: "Inventory Management",
          icon: <MdInventory />, 
          content:
            "Maintain inventory records for temple artifacts and manage the procurement and inventory of consumables.",
        },
        {
          subtitle: "Documentation and Record-Keeping",
          icon: <IoDocumentText />, 
          content:
            "Keep detailed records of maintenance activities, repairs, and inspections, as well as historical documentation related to the temple's history.",
        },
        {
          subtitle: "Personnel Management",
          icon: <FaCheckCircle />, 
          content:
            "Engage volunteers for facility management tasks, coordinate their activities effectively, and ensure proper training.",
        },
      ],
    },
  ];

  return (
    <div className="bg-black p-4 md:p-8 text-gray-800">
      {data.map((section, index) => (
        <section key={index} className="mb-12">
          <div className="mb-4">
            <h2 className="text-2xl text-yellow-600 font-bold">{section.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {section.sections.map((item, idx) => (
              <div key={idx} className="bg-transparent ring-2 ring-yellow-600 rounded-md shadow-lg p-4 text-white">
                <div className="flex flex-col items-center mb-4">
                  <div className="text-yellow-500 text-6xl mb-4">{item.icon}</div>
                  <h3 className="text-lg text-center font-bold text-yellow-600">{item.subtitle}</h3>
                </div>
                <p className="text-gray-300 text-center">{item.content}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default TempleManagement;
