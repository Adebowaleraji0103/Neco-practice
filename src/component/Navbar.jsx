import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="flex justify-evenly py-3 px-6 shadow-2xl">
      <div>Logo</div>

      <div>
        <MdMenu className="md:hidden"/>
      </div>

        <ul className=" hidden md:flex">
            <li>Home</li>
            <li>About Neco</li>
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
