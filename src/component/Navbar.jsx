import { MdMenu } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropdownLogo =  [ <RiArrowDropDownLine className="text-2xl"/>];

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
          {DropdownLogo.map((DropdownLogo, index) => {
            <p key={index}></p>;
          })}
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
