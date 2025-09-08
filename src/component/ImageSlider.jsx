import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function ImageSlider() {
    return(
        <div>
       <Swiper 
          modules={[Autoplay]}
        spaceBetween={2}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
         breakpoints={{
    610: {
      slidesPerView: 2, // md: and above
    },
     }}
       >

        </div>
    )
}
export default ImageSlider;