import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Button = ({text}) => {
  return (
    <button className="bg-[#2DC866] text-white py-4 px-5 rounded-[5px] hidden md:flex">
      Login
    </button>
  );
};

export default Button;
