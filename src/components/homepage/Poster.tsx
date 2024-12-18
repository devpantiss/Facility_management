import React from "react";

const Poster: React.FC = () => {
  return (
    <section className="bg-black flex flex-col justify-center items-center py-12 border-b-2 border-green-600">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-green-600">
            Digitize, Automate & Mechanize for a Sustainable Future
          </h2>
          <p className="text-white mt-2">
            As a problem-solving company, our award-winning technology and
            productivity framework deliver efficiency and cost savings.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-7xl">
          <div className="gap-y-4 lg:gap-x-4 flex flex-col md:flex-row">
            <div className="ring-2 bg-transparent ring-green-600 rounded-md">
              <div className="p-5">
                <h1 className="text-[18px] text-bold text-green-600">
                  Uberizing Hospital Operations with iPorter
                </h1>
                <p className="text-[14px] text-white">
                  We redefine facility management with our award-winning
                  intelligent digital portering solutions. Leveraging advanced
                  technology, we aim to minimize patient wait times, enhance
                  staff productivity & improve clinical response time.
                </p>
                <button className="bg-green-500 mt-8 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-green-600 transition">
                  Learn More{" "}
                </button>
              </div>
              <div>
                <video
                  src="https://ik.imagekit.io/grnoesre9/SMC-Phone-UI-01%20(1).webm?updatedAt=1695809489314"
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover z-[-2]"
                ></video>
              </div>
            </div>
            <div className="ring-2 bg-transparent ring-green-600 rounded-md">
              <div className="p-5">
                <div className="p-5">
                  <h1 className="text-[18px] text-green-600 font-bold">
                    Uberizing Hospital Operations with iPorter
                  </h1>
                  <p className="text-[14px] text-white">
                    We redefine facility management with our award-winning
                    intelligent digital portering solutions. Leveraging advanced
                    technology, we aim to minimize patient wait times, enhance
                    staff productivity & improve clinical response time.
                  </p>
                  <button className="bg-green-500 mt-8 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-green-600 transition">
                    Learn More{" "}
                  </button>
                </div>
              </div>
              <img src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/11/ssdp-2.png?w=638&ssl=1" />
            </div>
          </div>


          <div className="ring-2 mt-4 bg-transparent flex flex-col lg:flex-row ring-green-600 rounded-md">
            <div className="p-5">
              <h1 className="text-[18px] font-bold text-green-600">
                Uberizing Hospital Operations with iPorter
              </h1>
              <p className="text-[14px] text-white">
                We redefine facility management with our award-winning
                intelligent digital portering solutions. Leveraging advanced
                technology, we aim to minimize patient wait times, enhance staff
                productivity & improve clinical response time.
              </p>
              <button className="bg-green-500 mt-8 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-green-600 transition">
                Learn More{" "}
              </button>
            </div>
            <div>
              <video
                src="https://ik.imagekit.io/grnoesre9/SMC-UI-3.webm?updatedAt=1703047309374"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover z-[-2]"
              ></video>
            </div>
          </div>


          <div className="ring-2 mt-4 bg-transparent flex flex-col lg:flex-row-reverse ring-green-600 rounded-md">
            <div className="p-5">
              <h1 className="text-[18px] font-bold text-green-600">
                Uberizing Hospital Operations with iPorter
              </h1>
              <p className="text-[14px] text-white">
                We redefine facility management with our award-winning
                intelligent digital portering solutions. Leveraging advanced
                technology, we aim to minimize patient wait times, enhance staff
                productivity & improve clinical response time.
              </p>
              <button className="bg-green-500 mt-8 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-green-600 transition">
                Learn More{" "}
              </button>
            </div>
            <div className="">
              <img src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/11/UVGI-update-1.png?w=570&ssl=1" />
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Poster;
