import { MdMenu } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

// const DropdownLogo = [<RiArrowDropDownLine className="text-2xl" />];

const Navlink = [
  { label: "Home", href: "home" },
  // { label: "About Us", href: "#about" },
  // { label: "Our Exam", href: "exam" },
  // { label: "Payment", href: "payment" },
  // { label: "FAQ", href: "faq" },
  // { label: "Support", href: "support" },
];

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-2 px-3 font-semibold text-gray-600 shadow-2xl md:px-[6rem]">
      <h1>Logo</h1>
      
      <div>
        <MdMenu className="md:hidden" />
      </div>

      <div className="hidden md:flex">
        <ul className="gap-10 hidden md:flex">
        {Navlink.map((nav, index) => (
          <li key={index}>
            <a href={nav.href}>{nav.label}</a>
          </li>
        ))}
      </ul>

      <button className="bg-[#2DC866] text-white py-4 px-5 rounded-[5px]">
        Login
      </button>
      </div>
    </header>
  );
};

export default Navbar;
