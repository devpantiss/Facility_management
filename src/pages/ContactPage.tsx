import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-black pt-24 text-gray-800 p-6 md:pt-32 md:p-12">
      {/* Top Section: Get in Touch, Address, Job Application, Social Media */}
      <section className="container mx-auto text-white grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Contact Info */}
        <div className="border p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg text-green-600 mb-2">Get in touch</h3>
          <p className="text-sm">📞 Phone</p>
          <p className="text-sm">
            011-49491234 | +91 8076464444 | 918076465555
          </p>
          <p className="mt-2 text-sm">✉️ Email</p>
          <p className="text-sm">CONTACT@smc-india.com</p>
        </div>

        {/* Address */}
        <div className="border p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg text-green-600 mb-2">Address</h3>
          <p className="text-sm">
            📍 Plot No.18, 3rd Floor, DDA Community Center, Okhla Industrial
            Area, Phase-I, New Delhi - 110020
          </p>
        </div>

        <div className="flex flex-col gap-y-6">
          {/* Job Section */}
          <div className="border p-4 rounded-lg shadow-sm flex flex-col items-start">
            <h3 className="font-semibold text-green-600 text-lg mb-2">Looking for a job?</h3>
            <button className="mt-auto px-4 py-2 text-sm bg-green-600 hover:bg-gray-300 rounded-md">
              APPLY HERE →
            </button>
          </div>

          {/* Social Media */}
          <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-green-600 text-lg mb-2">Social media</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-700">
                📘
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-700">
                🐦
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-700">
                📸
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-700">
                🔗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="border text-white p-6 md:p-12 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl text-green-600 font-bold mb-4">Get in touch</h2>
        <p className="text-sm mb-6">
          Have a project or something you would like to talk to us about? Say
          hello, don’t be shy!
        </p>
        <form
          action="#"
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Column */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email*
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-transparent p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Mobile phone number*
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full bg-transparent p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium mb-1"
            >
              First name*
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full bg-transparent p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium mb-1"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full bg-transparent p-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium mb-1">
              City*
            </label>
            <input
              type="text"
              id="city"
              className="w-full bg-transparent p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium mb-1">
              State*
            </label>
            <input
              type="text"
              id="state"
              className="w-full bg-transparent p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="inquiryType"
              className="block text-sm font-medium mb-1"
            >
              Inquiry Type
            </label>
            <select id="inquiryType" className="w-full bg-transparent p-2 border rounded-md">
              <option value="">Please Select</option>
              <option value="general">General Inquiry</option>
              <option value="feedback">Feedback</option>
              <option value="support">Support</option>
            </select>
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">
              Company name*
            </label>
            <input
              type="text"
              id="company"
              className="w-full bg-transparent p-2 border rounded-md"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message*
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-transparent p-2 border rounded-md"
              required
            ></textarea>
          </div>

          {/* Submit and Captcha */}
          <div className="md:col-span-2 flex items-center space-x-4">
            {/* Replace with reCAPTCHA Integration */}
            <div className="bg-gray-200 rounded p-4 text-gray-500">
              reCAPTCHA Placeholder
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
