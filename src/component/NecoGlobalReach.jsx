// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

const NecoGlobalReach = () => {
  const country = [
    {
      short: "BR",
      name: "Benin Republic",
    },
    {
      short: "AB",
      name: " Republic",
    },
    {
      short: "AB",
      name: "Benin ",
    },
    {
      short: "AB",
      name: "Benin Republic",
    },
    {
      short: "AB",
      name: " Republic",
    },
  ];
  return (
    <div className="mb-90 bg-[#36893C] text-white flex flex-col gap-[2rem] padding">
      <div className=" text-xl text-center flex flex-col gap-4 padding md:text-[27px] ">
        <h2 className="font-semibold text-[2.3rem] md:text-[3.5rem]">
          NECO Global Reach
        </h2>
        <span className="md:w-[90%]">
          NECO conducts examinations for Nigerian International Schools in the
          following foreign countries
        </span>
      </div>

      {/* <Swiper
        modules={[Autoplay]}
        spaceBetween={2}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        <SwiperSlide className=""> */}
      <div className="grid md:grid-cols-3 gap-10"> 
        {country.map((card, index) => (
          <div className="flex gap-[2rem]">
            <ul
              key={index}
              className="bg-[#599A5E] flex flex-col gap-5 w-full rounded-[10px] font-semibold text-center py-[6rem]"
            >
              <li className="text-[3rem] text-black">{card.short}</li>
              <li className="text-[1.4rem] ">{card.name}</li>
            </ul>
          </div>
        ))}
      </div>
      {/* </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default NecoGlobalReach;
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// const NecoGlobalReach = () => {
//   const country = [
//     { short: "BR", name: "Benin Republic" },
//     { short: "SA", name: "Kingdom of Saudi Arabia" },
//     { short: "CI", name: "Cote D'Ivoire" },
//     { short: "GQ", name: "Equatorial Guinea" },
//     { short: "NE", name: "Niger Republic" },
//   ];

//   return (
//     <div className="mb-90 bg-[#36893C] text-white flex flex-col gap-[2rem] padding">
//       {/* Heading */}
//       <div className="text-xl text-center flex flex-col gap-4 md:text-[27px]">
//         <h2 className="font-semibold text-[2.3rem] md:text-[3.5rem]">
//           NECO Global Reach
//         </h2>
//         <span className="md:w-[90%] mx-auto">
//           NECO conducts examinations for Nigerian International Schools in the
//           following foreign countries
//         </span>
//       </div>

//       {/* Swiper */}
//       {/* <Swiper
//         modules={[Autoplay]}
//         spaceBetween={20}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 7000, disableOnInteraction: false }}
//         breakpoints={{
//           640: { slidesPerView: 2 },   // 2 cards on small tablets
//           1024: { slidesPerView: 3 },  // 3 cards on desktop
//           1280: { slidesPerView: 4 },  // 4 cards on large screen
//         }}
//       > */}
//         {country.map((card, index) => (
//           <div key={index}>
//             <div className="bg-[#599A5E] flex flex-col gap-5 rounded-[10px] font-semibold text-center py-[6rem] shadow-lg">
//               <p className="text-[3rem] text-black">{card.short}</p>
//               <p className="text-[1.4rem]">{card.name}</p>
//             </div>
//           </div>
//         ))}
//       {/* </Swiper> */}
//     </div>
//   );
// };

// export default NecoGlobalReach;
