const name = [
  {
    h2: "Our Mission",
    p: " To deliver Examinations whose results are trusted worldwide for their credibility",
  },
  {
    h2: "Our Vision",
    p: " To become a major player within the global assessment industry",
  },
  {
    h2: "Core Values",
    p: " Redefining the future of the Nigerian child through quality assessmenty",
  },
];

function OurPurpose() {
  return (
    <main className="flex flex-col gap-[2rem] text-[14px] text-white md:flex-row md:gap-0 md:text-[16px]">
      <div className="flex py-[1rem] px-[1.5rem] flex-col gap-5 bg-[#0B2502] font-semibold md:py-[4rem] md:px-[7rem] md:w-[50%]">
        <h2 className="text-[28px] text-center text-white font-bold md:text-[37px] md:flex">
          Our Purpose
        </h2>
        {name.map((text, index) => (
          <div key={index} className="flex flex-col gap-3 text-gray-200">
            <h2 className="text-[20px] font-semibold">{text.h2}</h2>
            <p className="leading-5">{text.p}</p>
          </div>
        ))}
      </div>

      {/* ....... second session ....... */}
      <div className="flex px-[1rem] flex-col gap-5 bg-[#F8FFF8] text-[#4E4E4E] font-semibold md:py-[4rem] md:px-[5rem] md:w-[50%]">
        <h1 className="text-[28px] text-center font-bold md:text-[37px] md:flex">Our Mandate</h1>
        <div className="flex flex-col gap-4 leading-5 ">
          <p>
            Conduct of: National Common Entrance Examination (NCEE), Basic
            Education Certificate Examination (BECE), Senior School Certificate
            Examination (SSCE) Internal and External The above mandate is
            propelled by the Council's vision and mission statements, core
            value, slogan and Ethos.
          </p>
          <p>
            The story of NECO and its achievements is a continuously developing
            one and cannot be completely told in a piece as short as this.
            However, as has been observed elsewhere, Perhaps, the greatest
            achievement of NECO is that it has provided gainful employment for
            over a thousand Nigerians [and given hope to thousands more –
            candidates who had been able to keep their matriculation dates
            because of the timely release of their results by NECO].
          </p>
        </div>
      </div>
    </main>
  );
}
export default OurPurpose;
