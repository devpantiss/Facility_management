import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dummy data for logos
const logos = [
  {
    id: 1,
    src: "https://bsabt.odisha.gov.in/assets/images/isbt-logo.svg",
    alt: "BSABT",
  },
  {
    id: 2,
    src: "https://bsabt.odisha.gov.in/assets/images/isbt-logo.svg",
    alt: "BSABT",
  },
  {
    id: 3,
    src: "https://bsabt.odisha.gov.in/assets/images/isbt-logo.svg",
    alt: "BSABT",
  },
  // {
  //   id: 2,
  //   src: "https://utkalbuilders.com/wp-content/uploads/2023/09/utkal-Logo.webp",
  //   alt: "utkal builders",
  // },
  // {
  //   id: 3,
  //   src: "http://www.vipulgroup.in/assets/images/logo.png",
  //   alt: "vipul group",
  // },
  // {
  //   id: 4,
  //   src: "https://www.tridentgalaxy.com/img/logo/logo.png",
  //   alt: "Trident Galaxy",
  // },
  // {
  //   id: 5,
  //   src: "https://www.springvillegreens.com/img/springville_green_logo.png",
  //   alt: "Springville",
  // },
  // {
  //   id: 6,
  //   src: "https://dnfairytale.com/wp-content/themes/fairytale/img/logo.png",
  //   alt: "DN Logo",
  // },
  // {
  //   id: 7,
  //   src: "https://motwaniconstructions.com/wp-content/uploads/2023/09/Motwani-Constructions-Logo.png",
  //   alt: "Motwani constructions",
  // },
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
      <h2 className="text-2xl font-bold text-center text-orange-400 mb-6">
        Our Partners
      </h2>
      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex justify-center items-center p-3"
            >
              <div className="bg-orange-400/30 flex justify-center items-center p-4 rounded-md">
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
