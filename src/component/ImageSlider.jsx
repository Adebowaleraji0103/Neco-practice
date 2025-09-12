import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function ImageSlider() {
  return (
    <div className="">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src="slider (1).png" alt="slider" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider (1).png" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider (1).png" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider (1).png" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider (1).png" alt="slider" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
export default ImageSlider;
