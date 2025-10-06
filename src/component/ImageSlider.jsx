import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function ImageSlider() {
  return (
    <div className="py-10 padding">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={2}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        <SwiperSlide className="w-full">
          <img src="slider (1).png" alt="slider" loading="lazy" className="w-full " />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider (2).png" alt="slider" loading="lazy" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider (3).png" alt="slider" loading="lazy" className="w-full"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider (4).png" alt="slider" loading="lazy" className="w-full"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider (5).png" alt="slider" loading="lazy" className="w-full"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default ImageSlider;
