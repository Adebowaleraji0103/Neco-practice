const NecoGlobalReach = () => {
  const country = [
    {
      short: "AB",
      name: "Benin Republic",
    },
    {
      short: "AB",
      name: "Benin Republic",
    },
    {
      short: "AB",
      name: "Benin Republic",
    },
    {
      short: "AB",
      name: "Benin Republic",
    },
    {
      short: "AB",
      name: "Benin Republic",
    },
  ];
  return (
    <div>
      <div className="mb-90 text-xl bg-[#36893C] text-white text-center flex flex-col gap-4 padding md:text-[27px] ">
        <h2 className="font-semibold text-[2.3rem] md:text-[3.5rem]">
          NECO Global Reach
        </h2>
        <span className="md:w-[90%]">
          NECO conducts examinations for Nigerian International Schools in the
          following foreign countries
        </span>
      </div>

      {country.map((card, index) => (
        <div key={index}>
          {card.short}
          {card.name}
        </div>
      ))};
    </div>
  );
};

export default NecoGlobalReach;
