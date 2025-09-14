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

const Mobile = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div>
      <MdMenu
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        className="md:hidden text-3xl relative"
      />
      {menuIsOpen && (
        <div className="z-50 top-0 left-0 flex justify-between  w-full h-full text-[14px] fixed bg-gray-800/45 inset-0 text-white md:hidden">
          <div className=" w-[35%] h-full text-[30px] flex justify-end px-3 py-15">
            <CgCloseR onClick={() => setMenuIsOpen(false)} />
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
            <button className="bg-[#2DC866] text-white text-[16px] w-fit py-1 px-2 rounded-[5px] flex">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mobile;
