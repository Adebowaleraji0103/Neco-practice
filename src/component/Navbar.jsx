import { MdMenu } from "react-icons/md";
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

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-2 px-[6rem] font-semibold text-gray-600 shadow-2xl">
      <div>Logo</div>

      <div>
        <MdMenu className="md:hidden" />
      </div>

      <ul className="flex gap-10">
        {Navlink.map((nav, index) => (
          <li key={index}>
            <a href={nav.href}>
            {nav.label}

            </a>
          </li>
        ))}
      </ul>

      <button className="bg-[#2DC866] text-white py-4 px-5 rounded-[5px]">Login</button>
    </header>
  );
};

export default Navbar;
