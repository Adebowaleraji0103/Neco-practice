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
    <header className="flex justify-between items-center py-4 px-6  font-semibold text-gray-700 shadow-lg md:px-[7rem] md:py-3">
      <h1 className="text-2xl">Logo</h1>

      <div>
        <MdMenu
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          className="md:hidden text-3xl relative"
        />
      </div>

      <ul className="relative gap-10 hidden flex-1 md:flex md:justify-center">
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
        <div className="absolute top-0 left-0 flex justify-between  w-full h-full text-[14px] bg-red-500  text-white md:hidden">
         <div className=" w-[35%] h-full bg-green-300 text-[30px] flex justify-end px-3 py-15">
           <CgCloseR onClick={() => setMenuIsOpen(false)}/>
         </div>

          <div className="flex flex-col gap-10 w-[65%] bg-white px-3 pt-[3.5rem] text-black text-[25px] ">
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
