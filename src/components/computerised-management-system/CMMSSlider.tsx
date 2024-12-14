import React, { useEffect, useState } from "react";
import Slider from "react-slick";

interface CMMSSliderProps {
  image: string;
  title: string;
}
interface SlideItemProps {
  slides: CMMSSliderProps[];
}

const CMMSSlider: React.FC<SlideItemProps> = ({ slides }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  // Update cursor position only if hovered
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isHovered) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto py-8 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)} // Activate hover state
      onMouseLeave={() => setIsHovered(false)} // Deactivate hover state
    >
      {/* Custom Cursor - Conditionally Rendered */}
      {isHovered && (
        <div
          className="pointer-events-none fixed z-50"
          style={{
            top: cursorPosition.y,
            left: cursorPosition.x,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Custom Cursor */}
          <div className="relative flex items-center justify-center">
            {/* Center Circle */}
            <div className="w-10 h-10 bg-green-500 rounded-full border-4 border-white"></div>

            {/* Left Arrow */}
            <div className="absolute left-[-30px]">
              <svg
                className="w-6 h-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.41 16.58L10.83 12l4.58-4.58L14 6l-6 6 6 6z" />
              </svg>
            </div>

            {/* Right Arrow */}
            <div className="absolute right-[-30px]">
              <svg
                className="w-6 h-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.58L13.17 12 8.59 7.42 10 6l6 6-6 6z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Slider */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="px-4 py-4">
            <div className="relative h-[200px] border border-gray-300 bg-white p-6 flex flex-col justify-center items-center rounded-lg shadow-md">
              <img src={slide.image} alt={slide.title} className="w-8 mb-4" />
              <h3 className="text-lg text-center font-semibold">{slide.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CMMSSlider;