import { MdMenu } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropdownLogo = [<RiArrowDropDownLine className="text-2xl" />];

const Navlink = [
  { label: "Home", href: "home" },
  { label: "About Us", href: "#about" },
  { label: "Our Exam", href: "exam" },
  { label: "Payment", href: "payment" },
  { label: "FAQ", href: "faq" },
  { label: "Support", href: "support" },
  { label: "Login", href: "login" },
];

const Navbar = () => {
  return (
    <header className="flex justify-between py-3 px-6 shadow-2xl">
      <div>Logo</div>

      <div>
        <MdMenu className="md:hidden" />
      </div>

     <div>
      {}
     </div>

      <button>Login</button>
    </header>
  );
};

export default Navbar;
