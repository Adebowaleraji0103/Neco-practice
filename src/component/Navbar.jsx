import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <header>
      <div>Logo</div>

      <div>
        <MdMenu className="md:hidden"/>
      </div>

      <nav className="hidden md:flex">
        <ul>
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
      </nav>
    </header>
  );
};

export default Navbar;
