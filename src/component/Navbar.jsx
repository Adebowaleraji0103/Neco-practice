import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

// const DropdownLogo = [<RiArrowDropDownLine className="text-2xl" />];

const Navlink = [
  { label: "Home", href: "home" },
  { label: "About Us", href: "#about" },
  { label: "Our Exam", href: "exam" },
  { label: "Payment", href: "payment" },
  { label: "FAQ", href: "faq" },
  { label: "Support", href: "support" },
];
const [menuIsOpen, setMenuIsOpen] = useState(false);

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-4 px-5 font-semibold text-gray-700 shadow-lg md:px-[7rem] md:py-3">
      <h1 className="text-2xl">Logo</h1>

      <div>
        <MdMenu
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          className="md:hidden text-3xl"
        />
      </div>

      <ul className="gap-10 hidden md:flex">
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
      {menuIsOpen &&(
        <ul className="bg-red flex flex-col gap-7">
          {Navlink.map((nav, index) => (
            <li key={index}>
              <a href={nav.href}>{nav.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
