import { allCards } from "./examProductCard";

const AboutOurExam = () => {
  return (
    <div className="flex flex-col gap-[4rem] py-7 px-7 mt-[5rem] md:py-11 md:px-[7rem]">
      <div className="flex flex-col gap-[1.5rem] text-center text-[#6b7280]  ">
        <h1 className="text-[25px] font-bold  ">
          About Our Examinations
        </h1>
        <p>
          One of the core mandates of the Council as espoused in the enabling
          Act is the conduct of the Senior School Certificate Examination for
          internal and external candidates. Other examinations conducted by the
          Council are: National Common Entrance Examination (NCEE) and Basic
          Education Certificate Examination (BECE).
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-[2rem]">
        {allCards.map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor: card.backgroundColor,
              borderWidth: 1,
              borderColor: card.border,
            }}
            className={`border rounded-sm  py-[2rem] px-[2rem] flex flex-col gap-7 `}
          >
            <h1 className="font-bold text-[24px] uppercase md:text-[27px]">
              {card.name}
            </h1>
            <p className="text-[17px] font-semibold text-gray-800">
              {card.desc}
            </p>

              <div className="flex gap-2 font-semibold text-xl text-white">
                <button
                  style={{
                    backgroundColor: card.firstBtn?.bgcolor, color: card.btnTextcolor,}}
                  className="flex-1 py-4  "
                >
                  {card.firstBtn?.title}
                </button>
                {card.secondBtn && (
                  <button className="flex-1 border border-black text-[#054c0f] cursor-pointer ">
                    {card.secondBtn}
                  </button>
                )}
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default AboutOurExam;
