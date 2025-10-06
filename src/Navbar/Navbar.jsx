import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Navbar = () => {
  return (
      <header className="flex justify-between items-center py-4 px-6 w-full z-50 font-semibold text-gray-700 bg-white shadow-lg  md:px-[7rem] md:py-3 ">
        <Desktop />
        <Mobile />
      </header>
  );
};

export default Navbar;
