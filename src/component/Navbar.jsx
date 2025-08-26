import { MdMenu } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropdownLogo = [<RiArrowDropDownLine className="text-2xl" />];

const Navlink = [
  { label: "Home", href: "" },
  { label: "Home", href: "" }


];

const Navbar = () => {
  return (
    <header className="flex justify-between py-3 px-6 shadow-2xl">
      <div>Logo</div>

      <div>
        <MdMenu className="md:hidden" />
      </div>

      <ul className=" hidden md:flex gap-8">
        <li>Home</li>
        <div className="flex">
          <li>About Neco</li>
        </div>
        <li>Our Exam</li>
        <li>Neco Result</li>
        <li>Payment</li>
        <li>Operators</li>
        <li>FAQ</li>
        <li>Support</li>
      </ul>

      <button>Login</button>
    </header>
  );
};

export default Navbar;
