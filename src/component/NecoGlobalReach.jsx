const NecoGlobalReach = () => {
  const country = [
    {
      short: "BR",
      name: "Benin Republic",
    },
    // {
    //   short: "AB",
    //   name: " Republic",
    // },
    // {
    //   short: "AB",
    //   name: "Benin ",
    // },
    // {
    //   short: "AB",
    //   name: "Benin Republic",
    // },
    // {
    //   short: "AB",
    //   name: " Republic",
    // },
  ];
  return (
    <div className="mb-90 bg-[#36893C] text-white flex flex-col gap-[2rem]">
      <div className=" text-xl text-center flex flex-col gap-4 padding md:text-[27px] ">
        <h2 className="font-semibold text-[2.3rem] md:text-[3.5rem]">
          NECO Global Reach
        </h2>
        <span className="md:w-[90%]">
          NECO conducts examinations for Nigerian International Schools in the
          following foreign countries
        </span>
      </div>
      {country.map((card, index) => (
        <div className="flex px-[1rem] ">
          <ul key={index} className="bg-[#599A5E] flex flex-col gap-11 w-full rounded-[5px] font-bold">
            <li className="text-[3rem] text-black">{card.short}</li>
            <li className="text-[1.4rem] ">{card.name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NecoGlobalReach;
