import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dummy data for logos
const logos = [
  {
    id: 1,
    src: "https://wisdomtreebbsr.com/wp-content/uploads/2019/12/The-DN-Wisdom-New-Logo_2021-1-768x591.jpg",
    alt: "falcon real estate",
  },
  {
    id: 2,
    src: "https://admission.odmglobalschool.org/images/logo-2.png",
    alt: "ODM Global",
  },
  {
    id: 3,
    src: "https://odishavikash.com/img/VGI.png",
    alt: "vikash edu.",
  },
  {
    id: 4,
    src: "https://saiinternational.edu.in/wp-content/themes/ds-child/assets/images/brand/ftr-sai-logo.png",
    alt: "sai international",
  },
  {
    id: 5,
    src: "http://www.dooninternational.in/wp-content/uploads/2015/07/doon-logo.png",
    alt: "doon international",
  },
];

const Clients: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Adjust for medium screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Adjust for mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-black">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
        Our Partners
      </h2>
      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex justify-center items-center p-3"
            >
              <div className="bg-green-600/30 flex justify-center items-center p-4 rounded-md">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
