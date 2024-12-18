import React from "react";
import ImageSlider from "../components/ImageSlider";

const CareersPage: React.FC = () => {
  const sliderImages = [
    "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/careers-3.png?w=819&ssl=1",
    "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/careers-1.png?w=819&ssl=1",
    "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/careers-2.png?w=819&ssl=1",
    "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/careers-4.png?w=819&ssl=1",
    "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/careers-5.png?w=819&ssl=1",
    "https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/careers-6.png?w=819&ssl=1",
  ];

  return (
    <div className="bg-black text-white pt-24 px-8">
      {/* Header Section */}
      <section className="text-center py-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-green-600 mb-4">Career at MWF India</h1>
        <p className="text-lg max-w-3xl mx-auto">
          We generate success instead of merely aiming for it. Three strong pillars serve as
          our compass at SMC: people, customers, and operational excellence...
        </p>
      </section>

      {/* Image Slider Section */}
      <section className="max-w-5xl mx-auto mb-12">
        <ImageSlider images={sliderImages} />
      </section>

      {/* Submit Your Resume Form Section */}
      <section className="max-w-4xl mx-auto bg-transparent p-8 rounded-lg ring-2 ring-green-600 shadow-lg px-6 my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Submit Your Resume</h2>
        <form className="space-y-6">
          <div>
            <label className="block font-medium mb-1">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-transparent border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border bg-transparent rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border bg-transparent rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              className="w-full border bg-transparent rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Job Title</label>
            <input
              type="text"
              className="w-full border bg-transparent rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter the job title you're applying for"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Resume<span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              className="w-full border bg-transparent rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </section>

      {/* "Why Join Us?" Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-12 py-12">
        <div>
          <img
            src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/10/careers.png?w=440&ssl=1"
            alt="team-work"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl text-green-600 font-bold mb-6">Why Join Us?</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="text-white">
              <strong className="text-green-500">Visionary Leadership:</strong> Join a team
              led by visionary leaders fostering an environment of innovation.
            </li>
            <li className="text-white">
              <strong className="text-green-500">Inclusive Culture:</strong> Embrace
              diversity in a workplace where every individual is valued.
            </li>
            <li className="text-white">
              <strong className="text-green-500">Impactful Work:</strong> Contribute to
              projects that make a difference.
            </li>
            <li className="text-white">
              <strong className="text-green-500">Be Yourself:</strong> Immerse in a culture
              that celebrates individuality.
            </li>
          </ul>
        </div>
      </section>

      
    </div>
  );
};

export default CareersPage;
