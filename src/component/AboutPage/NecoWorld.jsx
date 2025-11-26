const allCard = [
  {
    image: "Kingdom of Saudi Arabia.f97ce6ce.jpg",
    country: "Kingdom of Saudi Arabia",
  },
  {
    image: "Cote D'Ivoire.a8d23408.jpg",
    country: "Cote D'Ivoire",
  },
  {
    image: "Equatorial Guinea.3417ac28.jpg",
    country: "Equatorial Guinea",
  },
  {
    image: "Niger Republic.44be0317.jpg",
    country: "Niger Republic",
  },
  {
    image: "Benin Republic.6a0d5d8d.jpg",
    country: "Benin Republic",
  },
  {
    image: "Togo.1ff07fff.jpg",
    country: "Togo",
  },
  {
    image: "Gabon.32621101.jpg",
    country: "Gabon",
  },
];

const NecoWorld = () => {
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
            className="bg-[#4C8A52] flex flex-col gap-4 rounded-[15px] hover:text-[#FABB18] hover:scale-110 duration-400"
          >
            <img
              src={card.image}
              alt={card.image}
              className="h-[65%] w-full rounded-t-[15px]"
            />
            <p className="text-lg font-bold">{card.country}</p>
          </div>
        ))}
      </div>

      <div className="px-[1rem] md:px-[6rem] mt-[2rem]">
        <p className="border rounded-2xl font-semibold border-gray-300 py-[2rem] px-[1rem] md:px-[3rem] md:py-[4rem] md:text-lg">
          This further showcases NECO Results and Certificates international
          acceptability in congruence with its{" "}
          <span className="text-yellow-400">Mission and Vision.</span> NECO
          continues to witness unbridled worldwide patronage and growth in
          admiration of its excellence in service delivery and client
          satisfaction.
        </p>
      </div>
    </div>
  );
}
 
export default NecoWorld;
