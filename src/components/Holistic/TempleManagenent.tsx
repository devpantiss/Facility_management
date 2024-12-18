import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const TempleManagement: React.FC = () => {
  return (
    <div className="bg-black p-4 md:p-8 text-gray-800">
      {/* Infrastructure and Facility Maintenance */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734505083/infrastructure_lxxo5x.jpg"
            alt="Temple Building"
            className="w-full md:w-1/2 h-auto rounded-md shadow-lg"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl text-yellow-200 font-bold mb-4">
              Infrastructure and Facility Maintenance
            </h2>
            <ul className="list-disc list-inside space-y-3">
              <li className="flex justify-start items-start">
                <span className="text-yellow-500 mr-2 mt-2">
                  <FaCheckCircle />
                </span>
                <p className="text-white">
                  <strong className="text-yellow-200">
                    Building Maintenance, Repair & Restoration:
                  </strong>{" "}
                  Regularly inspect and maintain the temple structure,
                  addressing wear and tear to ensure its structural integrity.
                </p>
              </li>
              <li className="flex justify-start items-start">
                <span className="text-yellow-500 mr-2 mt-2">
                  <FaCheckCircle />
                </span>
                <p className="text-white">
                  <strong className="text-yellow-200">
                    Rooms & Hall Management:
                  </strong>{" "}
                  Efficiently manage event planning, space utilization, and
                  amenities in temple rooms and halls.
                </p>
              </li>
              <li className="flex justify-start items-start">
                <span className="text-yellow-500 mr-2 mt-2">
                  <FaCheckCircle />
                </span>
                <p className="text-white">
                  <strong className="text-yellow-200">
                    Infrastructure Management:
                  </strong>{" "}
                  Maintain and optimize equipment, technology infrastructure,
                  and accessibility features within the temple.
                </p>
              </li>
              <li className="flex justify-start items-start">
                <span className="text-yellow-500 mr-2 mt-2">
                  <FaCheckCircle />
                </span>
                <p className="text-white">
                  <strong className="text-yellow-200">
                    Maintenance & Repair:
                  </strong>{" "}
                  Implement preventive maintenance programs and promptly address
                  repairs to key infrastructure elements.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Environmental and Grounds Management */}
      <section className="mb-12">
        <div className="flex flex-col-reverse md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl text-yellow-200 font-bold mb-4">
              Environmental and Grounds Management
            </h2>
            <ul className="list-disc list-inside space-y-3">
              <li className="flex justify-start items-start">
                <span className="text-yellow-500 mr-2 mt-2">
                  <FaCheckCircle />
                </span>
                <p className="text-white">
                  <strong className="text-yellow-200">Ground Keeping:</strong>{" "}
                  Maintain the temple grounds by tending to landscaping,
                  pathways, and walkways, adapting practices to seasonal
                  changes.
                </p>
              </li>
              <li className="flex justify-start items-start">
                <span className="text-yellow-500 mr-2 mt-2">
                  <FaCheckCircle />
                </span>
                <p className="text-white">
                  <strong className="text-yellow-200">
                    Hygiene, Cleaning & Sanitization:
                  </strong>{" "}
                  Establish routine cleaning schedules, implement sanitization
                  practices, and emphasize waste management for a clean and
                  hygienic environment.
                </p>
              </li>
              <li className="flex justify-start items-start">
                <span className="text-yellow-500 mr-2 mt-2">
                  <FaCheckCircle />
                </span>
                <p className="text-white">
                  <strong className="text-yellow-200">Pest Control:</strong>{" "}
                  Conduct regular inspections and implement integrated pest
                  management strategies to address and prevent pest issues.
                </p>
              </li>
            </ul>
          </div>
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734505083/environmental_imxkc8.jpg"
            alt="Temple Cleaning"
            className="w-full md:w-1/2 h-auto rounded-md shadow-lg"
          />
        </div>
      </section>

      {/* Security, Safety, and Community Engagement */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734505083/security_infe1f.jpg"
            alt="Temple Event"
            className="w-full md:w-1/2 h-auto rounded-md shadow-lg"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl text-yellow-200 font-bold mb-4">
              Security, Safety, and Community Engagement
            </h2>
            <ul className="list-disc list-inside space-y-3">
              <li className="flex justify-start items-start">
                <span className="text-yellow-500 mr-2 mt-2">
                  <FaCheckCircle />
                </span>
                <p className="text-white">
                  <strong className="text-yellow-200">
                    Security and Safety:
                  </strong>{" "}
                  Ensure the proper functioning of security systems, emergency
                  communication, and personnel training to maintain a secure
                  environment.
                </p>
              </li>
              <li className="flex justify-start items-start">
                <span className="text-yellow-500 mr-2 mt-2">
                  <FaCheckCircle />
                </span>
                <p className="text-white">
                  <strong className="text-yellow-200">Visitor Services:</strong>{" "}
                  Provide information desks, visitor amenities, and efficient
                  queue management for a positive visitor experience.
                </p>
              </li>
              <li className="flex justify-start items-start">
                <span className="text-yellow-500 mr-2 mt-2">
                  <FaCheckCircle />
                </span>
                <p className="text-white">
                  <strong className="text-yellow-200">
                    Community Engagement:
                  </strong>{" "}
                  Organize community programs, educational workshops, and
                  cultural events to engage with the temple community.
                </p>
              </li>
              <li className="flex justify-start items-start">
                <span className="text-yellow-500 mr-2 mt-2">
                  <FaCheckCircle />
                </span>
                <p className="text-white">
                  <strong className="text-yellow-200">
                    Collaboration with Local Law Enforcement:
                  </strong>{" "}
                  Collaborate with local law enforcement for enhanced security
                  through community policing initiatives and joint training
                  exercises.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Administrative and Documentation Practices */}
      <section>
        <div className="flex flex-col-reverse md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl text-yellow-200 font-bold mb-4">
              Administrative and Documentation Practices
            </h2>
            <ul className="list-disc list-inside space-y-3">
              <li className="flex justify-start items-start">
                <span className="text-yellow-500 mr-2 mt-2">
                  <FaCheckCircle />
                </span>
                <p className="text-white">
                  <strong className="text-yellow-200">
                    Inventory Management:
                  </strong>{" "}
                  Maintain inventory records for temple artifacts and manage the
                  procurement and inventory of consumables.
                </p>
              </li>
              <li className="flex justify-start items-start">
                <span className="text-yellow-500 mr-2 mt-2">
                  <FaCheckCircle />
                </span>
                <p className="text-white">
                  <strong className="text-yellow-200">
                    Documentation and Record-Keeping:
                  </strong>{" "}
                  Keep detailed records of maintenance activities, repairs, and
                  inspections, as well as historical documentation related to
                  the temple's history.
                </p>
              </li>
              <li className="flex justify-start items-start">
                <span className="text-yellow-500 mr-2 mt-2">
                  <FaCheckCircle />
                </span>
                <p className="text-white">
                  <strong className="text-yellow-200">
                    Personnel Management:
                  </strong>{" "}
                  Engage volunteers for facility management tasks, coordinate
                  their activities effectively, and ensure proper training.
                </p>
              </li>
            </ul>
          </div>
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734505083/administrative_jt6atn.jpg"
            alt="Temple Management Team"
            className="w-full md:w-1/2 h-auto rounded-md shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default TempleManagement;
