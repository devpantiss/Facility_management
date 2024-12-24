import React from "react";
import { FaTools, FaClock, FaShieldAlt, FaThumbsUp } from "react-icons/fa";

const Benefits: React.FC = () => {
  return (
    <section className="bg-black py-16 px-8 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center text-green-600 mb-8">
        Why Choose Our Plumbing Services?
      </h2>
      <p className="text-gray-200 text-center mb-12">
        We offer reliable, efficient, and professional plumbing solutions tailored to your needs. Here's why we stand out:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-trandsparent ring-green-600 ring-2 shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <FaTools className="text-green-600 text-4xl mb-4" />
          <h3 className="text-xl font-bold text-gray-200 mb-2">
            Certified Professionals
          </h3>
          <p className="text-gray-200">
            Our team consists of certified and experienced plumbers who ensure top-quality service.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-trandsparent ring-green-600 ring-2 shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <FaClock className="text-green-600 text-4xl mb-4" />
          <h3 className="text-xl font-bold text-gray-200 mb-2">
            Timely Service
          </h3>
          <p className="text-gray-200">
            We value your time. Expect prompt responses and timely solutions to your plumbing issues.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-trandsparent ring-green-600 ring-2 shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <FaShieldAlt className="text-green-600 text-4xl mb-4" />
          <h3 className="text-xl font-bold text-gray-200 mb-2">
            Guaranteed Safety
          </h3>
          <p className="text-gray-200">
            Your safety is our priority. We follow strict safety protocols for every job we undertake.
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-trandsparent ring-green-600 ring-2 shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <FaThumbsUp className="text-green-600 text-4xl mb-4" />
          <h3 className="text-xl font-bold text-gray-200 mb-2">
            Customer Satisfaction
          </h3>
          <p className="text-gray-200">
            We go the extra mile to ensure our customers are 100% satisfied with our services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
