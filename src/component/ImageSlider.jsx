import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Images = [
  {
    images: "slider (1).png",
    images: "slider (2).png",
    images: "slider (3).png",
    images: "slider (4).png",
    images: "slider (5).png",
  },
];

function ImageSlider() {
  return (
    <div className="">
      <SwiperSlide
        modules={[Autoplay]}
        spaceBetween={2}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {/* <SwiperSlide className="w-full">
          <img src="slider (1).png" alt="slider" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider (2).png" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider (3).png" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider (4).png" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider (5).png" alt="slider" />
        </SwiperSlide> */}
        <SwiperSlide>
          {Images.map((Images, index)=>(
            <div key={index}>
              <img src={Images} alt="" />
            </div>
          ))}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default ImageSlider;
