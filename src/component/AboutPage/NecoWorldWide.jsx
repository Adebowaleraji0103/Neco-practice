const allCard = [
  {
    image: "Kingdom of Saudi Arabia.f97ce6ce.jpg",
    country: "Kingdom of Saudi Arabia",
  },
];

const NecoWorldWide = () => {
  return (
    <div className="bg-[#1F6D27] text-white flex flex-col text-center gap-[2rem] py-[2rem] px-[1.5rem] md:py-[4rem] md:px-[7rem]">
      <h2 className="text-[28px] text-center font-bold md:text-[37px]">
        NECO'S WORLDWIDE REACH
      </h2>
      <p>
        NECO is a world class examination body conducting standard assessment
        and evaluation for Nigerian International schools in the following
        Foreign Countries:
      </p>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {allCard.map((card, index) => (
          <div
            key={index}
            className="bg-[#4C8A52] rounded-[15px] hover:text-[#FABB18] "
          >
            <img src={card.image} alt={card.image} className="h-[60%] w-full" />
            <p>{card.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NecoWorldWide;
