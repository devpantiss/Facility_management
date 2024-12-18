import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <Swiper
      slidesPerView={3} // Show 3 slides at a time
      spaceBetween={20} // Space between slides
      loop={true} // Infinite scroll
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay with a 3s delay
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="w-full h-auto"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`slide-${index}`}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
