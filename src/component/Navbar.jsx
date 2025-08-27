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
    <header className="flex justify-between py-3 px-6 shadow-2xl">
      <div>Logo</div>

      <div>
        <MdMenu className="md:hidden" />
      </div>

      <ul className="bg-red-700 flex gap-6">
        {Navlink.map((nav, index) => (
          <li key={index}>
            <a href={nav.href}>
            {nav.label}

            </a>
          </li>;
        ))}
      </ul>

      <button>Login</button>
    </header>
  );
};

export default Navbar;
