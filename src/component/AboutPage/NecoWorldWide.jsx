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

      {allCard.map((card, index)=(
        <div key={index}>
            {card.name}
            {card.country}
        </div>
      ))}
    </div>
  );
};

export default NecoWorldWide;
