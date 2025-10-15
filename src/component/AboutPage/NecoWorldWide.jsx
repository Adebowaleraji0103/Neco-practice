const allCard = [
  { name: "Ab", country: "Saudi" },
  { name: "Ab", country: "Saudi" },
  { name: "Ab", country: "Saudi" },
  { name: "Ab", country: "Saudi" },
  { name: "Ab", country: "Saudi" },
  { name: "Ab", country: "Saudi" },
  { name: "Ab", country: "Saudi" },
];

const NecoWorldWide = () => {
  return (
    <div className="bg-[#1F6D27] padding  py-[2rem]">
      <h1>NECO'S WORLDWIDE REACH</h1>
      <p>
        NECO is a world class examination body conducting standard assessment
        and evaluation for Nigerian International schools in the following
        Foreign Countries:
      </p>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {allCard.map((card, index) => (
          <div
            key={index}
            className="bg-[#4A9E52] py-[1rem] px-[4rem] rounded-[5px]"
          >
            <p>{card.name}</p>
            <p>{card.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NecoWorldWide;
