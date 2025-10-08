import NavbarLink from "./NavbarLink";
import { Link } from "react-router-dom";

console.log(Link)


const Desktop = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <img
        src="neco-logo.png"
        alt="neco-logo alt"
        className="w-[70px] md:w-[90px]"
      />

      <ul className="relative gap-10 hidden flex-1 md:flex md:justify-center">
        {NavbarLink.map((nav, index) => (
          <li key={index}>
            <Link to={(nav.href)} className="hover:text-gray-400">
              {nav.label}
            </Link>
           
          </li>
        ))}
      </ul>

     <button className="bg-[#2DC866] text-white py-4 px-5 rounded-[5px] hidden md:flex">
      Login
    </button>
    </div>
  );
};

export default Desktop;
