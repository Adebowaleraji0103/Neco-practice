import Note from "./Note";

const Hero = () => {
  return (
    <div className="flex flex-col gap-5 py-7 px-7 mt-[5rem] md:py-11 md:px-[7rem] ">
      <h1 className="font-bold text-3xl text-center md:text-6xl md:leading-16">
        Welcome to the National Examinations Council Website
      </h1>
      <Note/>
    </div>
  );
};

export default Hero;
