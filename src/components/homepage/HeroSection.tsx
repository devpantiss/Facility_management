import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  title: string;
  description: string;
  videoSrc: string;
}

const HeroSection: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides: Slide[] = [
    {
      title: "The Leading Player in Facility Management Sector!",
      description:
        "Go beyond sterile. Achieve Schedule-M perfection. SMC’s tech-driven facility management solutions synchronize your pharma operations for zero lacunae, flawless SOPs, and unwavering GMP compliance.",
      videoSrc:
        "https://smc-india.com/wp-content/uploads/2024/01/Healthcare.mp4",
    },
    {
      title: "Transforming the Private Security Sector a Step at a Time!",
      description: "Elevating safety and security with cutting-edge solutions.",
      videoSrc:
        "https://smc-india.com/wp-content/uploads/2024/01/Education.mp4",
    },
    {
      title: "Helping People Find the Best-Suited Job.",
      description: "Your partner in creating employment opportunities.",
      videoSrc:
        "https://smc-india.com/wp-content/uploads/2024/01/Residence.mp4",
    },
    {
      title: "Empowering Retail with State-of-the-Art Services.",
      description:
        "Retail solutions designed for maximum customer satisfaction.",
      videoSrc: "https://smc-india.com/wp-content/uploads/2024/01/Retail.mp4",
    },
  ];

  return (
    <Slider {...settings} className="relative w-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="relative h-[80vh] flex items-center justify-center text-white"
        >
          {/* Background Video */}
          <video
            src={slide.videoSrc}
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
          ></video>

          {/* Translucent Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]"></div>

          {/* Content Overlay */}
          <div className="relative flex flex-col mt-[300px] justify-center items-center text-center px-6 z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl  max-wmb-8 drop-shadow-lg">
              {slide.description}
            </p>
            <button className="bg-green-500 mt-4  text-white px-8 py-3 rounded-lg shadow-lg hover:bg-green-600 transition">
              Book a Free Consultation
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

/* Custom Navigation Buttons */
const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white text-black p-3 rounded-full shadow-lg transition z-10"
      aria-label="Next Slide"
    >
      &gt;
    </button>
  );
};

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white text-black p-3 rounded-full shadow-lg transition z-10"
      aria-label="Previous Slide"
    >
      &lt;
    </button>
  );
};

export default HeroSection;
