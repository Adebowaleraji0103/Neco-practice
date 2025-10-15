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
    <div>
      <h1>NECO'S WORLDWIDE REACH</h1>
      <p>
        NECO is a world class examination body conducting standard assessment
        and evaluation for Nigerian International schools in the following
        Foreign Countries:
      </p>

      {/* {allCard.map((card, index)=(
        <div key={index} className=" bg-[#4A9E52] flex flex-col gap-5 w-full rounded-[17px] font-semibold text-center py-[6rem] border transform transition duration-300 hover:scale-85 overflow-hidden hover:bg-[#599A5E]">
          <p>  {card.name}</p>
            <p>{card.country}</p>
        </div>

    
      ))} */}
      <div className="flex gap-7">
        {allCard.map((card, index) => (
          <div key={index} className="bg-[#4A9E52] py-[1rem] px-[4rem] rounded-[5px]">
            {/* <div className="bg-[#4A9E52] grid w-fit px-[3rem] py-[1rem]"> */}
              <p>{card.name}</p>
              <p>{card.country}</p>
            </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default NecoWorldWide;
