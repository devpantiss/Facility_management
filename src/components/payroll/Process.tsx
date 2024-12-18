import React from "react";
import { FaCheckCircle } from "react-icons/fa";


const Process: React.FC = () => {
  return (
    <section className="bg-black py-12 px-6 flex flex-col justify-center items-center">
      <h1 className="text-3xl text-white font-semibold mb-8 max-w-2xl text-center">
        A Payroll system that does more thn just{" "}
        <span className="text-[#22C55E]">processing salaries</span>
      </h1>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Left Section: Video */}
        <div className="w-full md:w-1/2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg shadow-lg"
          >
            <source
              src="https://framerusercontent.com/assets/55VbPwyi73qQHw1KfHJOoKw.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Section: Content */}
        <div className="w-full md:w-1/2">
          {/* Subheading */}
          <h3 className="text-xl font-bold mb-2 text-[#22C55E]">360° Payroll Management</h3>
          {/* Description */}
          <p className="text-white mb-4">
            Calculate & transfer accurate salaries, directly to the payees’ bank
            accounts with RazorpayX Payroll Software.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2">
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                Pay full-time/contract employees, interns & freelancers
              </p>
            </li>
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                Settle reimbursements instantly or with monthly salaries
              </p>
            </li>
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                Seamlessly process both regular & off-cycle payroll
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-6 mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-8">
        {/* Left Section: Video */}
        <div className="w-full md:w-1/2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg shadow-lg"
          >
            <source
              src="https://framerusercontent.com/assets/IRMbdgZtlqH8THx5c4tN4o7RjOI.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Section: Content */}
        <div className="w-full md:w-1/2">
          {/* Subheading */}
          <h3 className="text-xl text-[#22C55E] font-bold mb-2">
            Automated Statutory Compliance
          </h3>
          {/* Description */}
          <p className="text-white mb-4">
            A 100% automated payroll management system which caters to
            multi-state compliance laws and regulations. And no, we don’t charge
            you extra for it!
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2">
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                Access compliance reports like TDS, PF, ESIC, etc
              </p>
            </li>
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                Easily access challans on the self-serve dashboard
              </p>
            </li>
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                Stay ahead of regulatory changes, with real-time alerts
              </p>
            </li>
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                Digitally signed Form 16 & automated tax filing, payments
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-6 mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Left Section: Video */}
        <div className="w-full md:w-1/2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg shadow-lg"
          >
            <source
              src="https://framerusercontent.com/assets/U3MjpzNfcSvU76JMLi5aYecBVQ.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Section: Content */}
        <div className="w-full md:w-1/2">
          {/* Subheading */}
          <h3 className="text-xl text-[#22C55E] font-bold mb-2">
            Comprehensive HR Management Software
          </h3>
          {/* Description */}
          <p className="text-white mb-4">
            Do more than just processing salaries with RazorpayX Payroll
            Software. We offer features that have you covered for everything
            between hire and exit.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2">
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                CTC calculator, offer letter generator & more
              </p>
            </li>
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                A self-serve dashboard for payslips, Form 16, etc.
              </p>
            </li>
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                Integrate seamlessly with over 25 HRMS partners
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-6 mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-8">
        {/* Left Section: Video */}
        <div className="w-full md:w-1/2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg shadow-lg"
          >
            <source
              src="https://framerusercontent.com/assets/G95I0U2NcN89N6nAawn5VIBjb2I.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Section: Content */}
        <div className="w-full md:w-1/2">
          {/* Subheading */}
          <h3 className="text-xl text-[#22C55E] font-bold mb-2">
            Easy Attendance - Salary Sync
          </h3>
          {/* Description */}
          <p className="text-white mb-4">
            No need to manually match attendance data to payroll computation.
            Attendance is automatically calculated into the salary payouts.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2">
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                Track and manage leave, attendance and holidays
              </p>
            </li>
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                Seamless sync with your HRMS for error-free salary disbursals
              </p>
            </li>
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                No HRMS? Integrate with our time & attendance partners -Ubitech
                or Jibble
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-6 mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Left Section: Video */}
        <div className="w-full md:w-1/2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg shadow-lg"
          >
            <source
              src="https://framerusercontent.com/assets/53SfopHsQGY9f750XbOox1Aa4k.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Section: Content */}
        <div className="w-full md:w-1/2">
          {/* Subheading */}
          <h3 className="text-xl text-[#22C55E] font-bold mb-2">
            Strategic Insights with Analytics & Reports
          </h3>
          {/* Description */}
          <p className="text-white mb-4">
            Track and analyze data on a centralized dashboard. Use our suite of
            pre-built reports, or custom create one using your employee data.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2">
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                Track and analyze data on a centralized dashboard
              </p>
            </li>
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                Configure role-based access controls for security
              </p>
            </li>
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                Advanced data visualization to simplify complex data
              </p>
            </li>
            <li className="flex justify-start items-center">
              <span className="text-green-500 mr-2"><FaCheckCircle /></span>
              <p className="text-white">
                Unify data from multiple sources into a single repository
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Process;
