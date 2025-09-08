import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const Button = ({text}) => {
  return (
    <button className="bg-[#2DC866] text-white py-4 px-5 rounded-[5px] hidden md:flex">
      Login
    </button>
  );
};

export default Button;
