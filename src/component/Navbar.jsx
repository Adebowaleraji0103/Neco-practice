import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { CgCloseR } from "react-icons/cg";

const Navlink = [
  { label: "Home", href: "home" },
  { label: "About Us", href: "#about" },
  { label: "Our Exam", href: "exam" },
  { label: "Payment", href: "payment" },
  { label: "FAQ", href: "faq" },
  { label: "Support", href: "support" },
];

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center py-4 px-5 font-semibold text-gray-700 shadow-lg md:px-[7rem] md:py-3">
      <h1 className="text-2xl">Logo</h1>

      <div>
        <MdMenu
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          className="md:hidden text-3xl relative"
        />
      </div>

      <ul className="gap-10 hidden flex-1 md:flex md:justify-center">
        {Navlink.map((nav, index) => (
          <li key={index}>
            <a className="hover:text-gray-400" href={nav.href}>
              {nav.label}
            </a>
          </li>
        ))}
      </ul>

      <button className="bg-[#2DC866] text-white py-4 px-5 rounded-[5px] hidden md:flex">
        Login
      </button>
      {menuIsOpen && (
        <div className="text-[14px] absolute top-0 right-0 bg-gray-400 flex justify-between w-full h-full text-white">
          <CgCloseR
            className="text-[30px] bg-transparent  ml-auto"
            onClick={() => setMenuIsOpen(false)}
          />

          <div className="flex flex-col gap-10 w-[60%] px-3 pt-[3.5rem] text-black text-[25px] bg-white h-full">
            <h1>Menu</h1>
            <ul className="flex flex-col gap-6 text-[15px] text-gray-500">
              {Navlink.map((nav, index) => (
                <li key={index}>
                  <a href={nav.href}>{nav.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
