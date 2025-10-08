function OurPurpose() {
  return (
    <main className="flex flex-col gap-[2rem] md:flex-row md:justify-between">
      <div className="flex padding flex-col gap-5 text-white bg-[#0B2502] mt-5 lg:mt-0 text-[14px] font-semibold lg:text-base md:w-[50%]">
        <h1 className="text-[28px] text-center font-bold md:text-[32px] md:flex">Our Purpose</h1>
        {/* ......Mission......  */}
        <div >
          <h2>Our Mission</h2>
          <p>
            To deliver Examinations whose results are trusted worldwide for
            their credibility
          </p>
        </div>
        {/* .......Vision.........  */}
        <div>
          <h2>Our Vision</h2>
          <p>To become a major player within the global assessment industry</p>
        </div>
        {/* ........ Core Values ...........  */}
        <div>
          <h2>Core Values</h2>
          <p>
            Redefining the future of the Nigerian child through quality
            assessment
          </p>
        </div>
      </div>

      {/* ....... second session ....... */}
      <div className="flex padding flex-col gap-5 text-[#4E4E4E] mt-5 lg:mt-0 text-[14px] font-semibold lg:text-base md:w-[50%]">
        <h1>Our Mandate</h1>
        <div>
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
