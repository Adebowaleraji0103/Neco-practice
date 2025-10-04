// };

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/effect-cards";

const NecoGlobalReach = () => {
  const country = [
    { short: "BR", name: "Benin Republic" },
    { short: "AB", name: "Republic" },
    { short: "AB", name: "Benin" },
    { short: "AB", name: "Benin Republic" },
    { short: "AB", name: "Republic" },
    { short: "AB", name: "Republic" },
    { short: "AB", name: "Benin" },
    { short: "AB", name: "Benin Republic" },
    { short: "AB", name: "Republic" },
  ];

  return (
    <div className="mb-90 bg-[#36893C] text-white flex flex-col gap-[2rem] px-[1rem] py-[4rem]">
      <div className="text-xl text-center flex flex-col gap-4 padding md:text-[27px] padding">
        <h2 className="font-semibold text-[2.3rem] md:text-[3.5rem]">
          NECO Global Reach
        </h2>
        <span className="md:w-[90%]">
          NECO conducts examinations for Nigerian International Schools in the
          following foreign countries
        </span>
      </div>

      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        loop={true}
        spaceBetween={25}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="w-full mx-auto"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {country.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="  bg-[#599A5E] flex flex-col gap-5 w-full rounded-[17px] font-semibold text-center py-[6rem] transform transition duration-300 hover:scale-110 hover:rounded-[17px]"> 
              <div className="text-[3rem] text-black ">{card.short}</div>
              <div className="text-[1.4rem]">{card.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NecoGlobalReach;
