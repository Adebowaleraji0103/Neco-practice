const allCards = [
  {
    name: "Senior School Certificate Examination (SSCE)",
    desc: "The Senior School Certificate Examination (SSCE) Internal, is the examination conducted for candidates at the end of their Secondary School Education and the SSCE External is conducted for candidates that have attempted and have deficiency(ies) to make-up.",
    firstBtn: { title: "Internal", color: "#ddd" },
    secondBtn: "External",
    color: "bg-cyan-100",
    buttonColor: "bg-cyan-700",
  },
  {
    name: "Junior School Certificate Examination (SSCE)",
    desc: "The Senior School Certificate Examination (SSCE) Internal, is the examination conducted for candidates at the end of their Secondary School Education and the SSCE External is conducted for candidates that have attempted and have deficiency(ies) to make-up.",
    firstBtn: { title: "Internal", color: "#ddd" },
    // secondBtn: "External",
    color: "bg-cyan-100",
    buttonColor: "bg-cyan-700",
  },
  {
    name: "Senior School Certificate Examination (SSCE)",
    desc: "The Senior School Certificate Examination (SSCE) Internal, is the examination conducted for candidates at the end of their Secondary School Education and the SSCE External is conducted for candidates that have attempted and have deficiency(ies) to make-up.",
    firstBtn: { title: "Internal", color: "#ddd" },
    secondBtn: "External",
    bg: "#4444",
    buttonColor: "bg-black",
  },
];

const AboutOurExam = () => {
  return (
    <div className="flex flex-col gap-[4rem] py-7 px-7 mt-[5rem] md:py-11 md:px-[7rem]">
      <div className="flex flex-col gap-[1.5rem] text-[#6b7280]  ">
        <h1 className="text-[25px] font-bold text-black ">
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
            style={{ backgroundColor: card.bg }}
            className={`border rounded-xl  py-[2rem] px-[2rem] flex flex-col gap-4`}
          >
            <h1>{card.name}</h1>
            <p> {card.desc}</p>

            <div className="flex gap-2">
              <button
                style={{ backgroundColor: card.firstBtn?.color }}
                className="flex-1 border border-black"
              >
                {card.firstBtn?.title}
              </button>
              {card.secondBtn && (
                <button className="flex-1 border border-black">
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
