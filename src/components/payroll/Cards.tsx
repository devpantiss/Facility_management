import React, { useState } from "react";
import { FaUserCog, FaChartBar, FaFileInvoiceDollar, FaUsersCog, FaRedoAlt, FaMoneyCheckAlt, FaFileAlt, FaCalendarCheck, FaHandshake, FaTasks, FaWallet, FaPlug } from "react-icons/fa";

interface CardData {
  title: string;
  description: string;
  icon: React.ReactNode; // Accepts React nodes for icons
}

const Cards: React.FC = () => {
  const cards: CardData[] = [
    {
      title: "HR Management Software",
      description:
        "Manage employees right from onboarding to exit. Leave, attendance, reimbursements, etc., from a single dashboard.",
      icon: <FaUserCog className="text-[#22C55E] text-4xl mb-4" />,
    },
    {
      title: "Reports & Insights",
      description:
        "Access our standard reports on employee payroll, contractor payments, reimbursements, etc.",
      icon: <FaChartBar className="text-[#22C55E] text-4xl mb-4" />,
    },
    {
      title: "Payslips & Reimbursements",
      description:
        "Employees can easily access payslips and file for reimbursements on Whatsapp or on the dashboard.",
      icon: <FaFileInvoiceDollar className="text-[#22C55E] text-4xl mb-4" />,
    },
    {
      title: "Custom User Roles",
      description:
        "Create custom user roles for easier, faster processes. Create your workflows from scratch as needed.",
      icon: <FaUsersCog className="text-[#22C55E] text-4xl mb-4" />,
    },
    {
      title: "Automated Arrears and Salary Revision",
      description:
        "Revise salaries for any past or future dates, or even mid-month revisions. Automate arrear payments.",
      icon: <FaRedoAlt className="text-[#22C55E] text-4xl mb-4" />,
    },
    {
      title: "One-click Payroll Processing",
      description:
        "Process accurate salaries, directly to the bank account of employees, interns & contractors.",
      icon: <FaMoneyCheckAlt className="text-[#22C55E] text-4xl mb-4" />,
    },
    {
      title: "Automated Tax Filing and Payment",
      description:
        "We file and pay your TDS, PF, PT & ESIC for you, and keep the challans ready on your dashboard.",
      icon: <FaFileAlt className="text-[#22C55E] text-4xl mb-4" />,
    },
    {
      title: "Attendance Management",
      description:
        "Manage, approve and track leaves. Attendance will be automatically computed into the salary cycle.",
      icon: <FaCalendarCheck className="text-[#22C55E] text-4xl mb-4" />,
    },
    {
      title: "Contractor Payments",
      description:
        "You pay your contractual employees via RazorpayX Payroll, and we file and pay the associated TDS.",
      icon: <FaHandshake className="text-[#22C55E] text-4xl mb-4" />,
    },
    {
      title: "Bulk Wizard",
      description:
        "Save time and execute additions, deductions, and loss of pay in one fell swoop with RazorpayX Payroll Bulk Wizard.",
      icon: <FaTasks className="text-[#22C55E] text-4xl mb-4" />,
    },
    {
      title: "Instant Reimbursements",
      description:
        "You don’t have to wait until next month to reimburse your employees. Approve and pay on the go!",
      icon: <FaWallet className="text-[#22C55E] text-4xl mb-4" />,
    },
    {
      title: "Powerful Integrations",
      description:
        "Plug RazorpayX Payroll with your HRMS, or choose from our integrations: Zoho People, Zaggle, Plum, etc.",
      icon: <FaPlug className="text-[#22C55E] text-4xl mb-4" />,
    },
  ];

  const [showAll, setShowAll] = useState<boolean>(false);

  // Conditionally show the first 6 or all cards
  const visibleCards = showAll ? cards : cards.slice(0, 6);

  return (
    <div className="bg-gray-50 py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        India's preferred <span className="text-[#22C55E]">Payroll</span> Management Software
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
          >
            <div className="flex justify-center items-center">{card.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#22C55E] text-white py-2 px-4 rounded-md hover:bg-[#1aa74e] transition-all"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Cards;
