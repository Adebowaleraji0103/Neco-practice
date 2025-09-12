import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function ImageSlider() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src="slider (1).png" alt="slider" /></SwiperSlide>
        <SwiperSlide><img src="slider (1).png" alt="slider" /></SwiperSlide>
        <SwiperSlide><img src="slider (1).png" alt="slider" /></SwiperSlide>
        <SwiperSlide><img src="slider (1).png" alt="slider" /></SwiperSlide>
        <SwiperSlide><img src="slider (1).png" alt="slider" /></SwiperSlide>
        
        ...
      </Swiper>
    </div>
  );
}
export default ImageSlider;
