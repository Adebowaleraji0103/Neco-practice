import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Navbar = () => {
  return (
      <header className="flex justify-between items-center py-4 px-6 w-full z-50 mb-[5rem] font-semibold text-gray-700 bg-white shadow-sm shadow-zinc-100 md:px-[7rem] md:py-3 md:mb-[7rem] fixed top-0 h-[5rem] ">
        <Desktop />
        <Mobile />
      </header>
  );
};

export default Navbar;
