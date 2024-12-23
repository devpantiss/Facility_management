import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const testimonials = [
  {
    id: 1,
    text: "Exceptional cleaning and sanitation services that have improved our hospital's patient satisfaction.",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729677655/dhruv_mobile_img_ootz2j.webp",
    name: "Dr. Ananya Sharma",
    designation: "Chief Medical Officer",
    company: "HealthPlus Hospital",
  },
  {
    id: 2,
    text: "Their facility management ensures all medical equipment is always up and running efficiently.",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729677655/dhruv_mobile_img_ootz2j.webp",
    name: "Rahul Mehta",
    designation: "Operations Manager",
    company: "WellCare Clinics",
  },
  {
    id: 3,
    text: "Thanks to their waste management solutions, our hospital complies with all safety standards effortlessly.",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729677655/dhruv_mobile_img_ootz2j.webp",
    name: "Sita Rao",
    designation: "Compliance Officer",
    company: "Global Health Center",
  },
  {
    id: 4,
    text: "The most reliable team for maintaining hygiene and cleanliness in critical care zones.",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729677655/dhruv_mobile_img_ootz2j.webp",
    name: "Dr. Joseph Fernandes",
    designation: "Surgeon",
    company: "City Medical Hub",
  },
  {
    id: 5,
    text: "Highly professional staff and excellent support for hospital maintenance.",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729677655/dhruv_mobile_img_ootz2j.webp",
    name: "Neha Kapoor",
    designation: "Facility Manager",
    company: "MediCare Facility Services",
  },
  {
    id: 6,
    text: "Their innovative pest control solutions have created a cleaner and safer hospital environment.",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729677655/dhruv_mobile_img_ootz2j.webp",
    name: "Anil Kumar",
    designation: "Admin Head",
    company: "HealthyLife Hospitals",
  },
  {
    id: 7,
    text: "We trust their team for round-the-clock maintenance and sanitation. Truly a game changer.",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729677655/dhruv_mobile_img_ootz2j.webp",
    name: "Pooja Gupta",
    designation: "Director",
    company: "LifeLine Healthcare Group",
  },
];

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    onClick={onClick} // Ensure onClick is passed correctly
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "yellow",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      position: "absolute",
      right: "-45px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 10,
      cursor: "pointer",
    }}
  >
    <FaChevronRight className="text-yellow-600 text-[44px]" />
  </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    onClick={onClick} // Ensure onClick is passed correctly
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "green",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      position: "absolute",
      left: "-45px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 10,
      cursor: "pointer",
    }}
  >
    <FaChevronLeft className="text-yellow-600 text-[44px]" />
  </div>
);


const Testimonials: React.FC = () => {
  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablets and smaller devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <div className="py-10 bg-black border-t-2 border-yellow-600">
      <h2 className="text-3xl font-bold text-center mb-6 text-yellow-600">
        What Our Clients Say
      </h2>
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6">
              <div className="relative bg-transparent p-8 ring-2 ring-yellow-600 rounded-lg shadow-md flex flex-col justify-center items-center text-center">
                {/* Testimonial Text */}
                <p className="text-lg text-yellow-600 font-medium mb-8">
                  "{testimonial.text}"
                </p>

                {/* Bottom-right Image */}
                <div className="absolute bottom-4 right-4 w-16 h-16">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full border-2 border-gray-300"
                  />
                </div>

                {/* Name and Details */}
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {testimonial.designation} <br /> {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;