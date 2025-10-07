const Hero = () => {
  return (
    <div className="flex flex-col gap-5 py-7 px-7 mt-[5rem] md:py-11 md:px-[7rem] ">
      <h1 className="font-bold text-3xl text-center md:text-6xl md:leading-16">
        Welcome to the National Examinations Council Website
      </h1>
      <p className="text-[#6b7280] text-[17px]">
          This website is a personal project created for educational and
          practice purposes. It is inspired by the design and content of
          <a href="https://neco.gov.ng/">neco.gov.ng/</a>, but is not affiliated with or endorsed by the
          original creators. Some elements have been modified to suit the scope
          of this project.
      </p>
    </div>
  );
};

export default Hero;
