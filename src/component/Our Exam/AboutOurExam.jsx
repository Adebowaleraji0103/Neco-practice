const allCards = [
  {
    name: "Senior School Certificate Examination (SSCE)",
    desc: "The Senior School Certificate Examination (SSCE) Internal, is the examination conducted for candidates at the end of their Secondary School Education and the SSCE External is conducted for candidates that have attempted and have deficiency(ies) to make-up.",
    firstBtn: "Internal",
    secondBtn: "External",
  },

  {
    name: "Senior School Certificate Examination (SSCE)",
    desc: "The Senior School Certificate Examination (SSCE) Internal, is the examination conducted for candidates at the end of their Secondary School Education and the SSCE External is conducted for candidates that have attempted and have deficiency(ies) to make-up.",
    firstBtn: "Internal",
  },

  {
    name: "Senior School Certificate Examination (SSCE)",
    desc: "The Senior School Certificate Examination (SSCE) Internal, is the examination conducted for candidates at the end of their Secondary School Education and the SSCE External is conducted for candidates that have attempted and have deficiency(ies) to make-up.",
    firstBtn: "Internal",
  },

  {
    name: "Senior School Certificate Examination (SSCE)",
    desc: "The Senior School Certificate Examination (SSCE) Internal, is the examination conducted for candidates at the end of their Secondary School Education and the SSCE External is conducted for candidates that have attempted and have deficiency(ies) to make-up.",
    firstBtn: "Internal",
  },

  {
    name: "Senior School Certificate Examination (SSCE)",
    desc: "The Senior School Certificate Examination (SSCE) Internal, is the examination conducted for candidates at the end of their Secondary School Education and the SSCE External is conducted for candidates that have attempted and have deficiency(ies) to make-up.",
    firstBtn: "Internal",
  },
];

const AboutOurExam = () => {
  return (
    <div className="flex flex-col gap-[4rem] py-7 px-7 mt-[5rem] md:py-11 md:px-[7rem] ">
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
            className="border rounded-xl bg-[#DEECF0] py-[2rem] px-[2rem] flex flex-col gap-4"
          >
            <h1> {card.name}</h1>
            <p> {card.desc}</p>
            <button>{card.firstBtn}</button>
            <button> {card.secondBtn}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutOurExam;
