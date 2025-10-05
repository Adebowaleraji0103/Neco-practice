import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Navbar = () => {
  return (
    // <div>
      <header className="flex justify-between items-center py-4 px-6 w-full fixed font-semibold text-gray-700 shadow-lg md:px-[7rem] md:py-3 ">
        <Desktop />
        <Mobile />
      </header>
    {/* </div> */}
  );
};

export default Navbar;
