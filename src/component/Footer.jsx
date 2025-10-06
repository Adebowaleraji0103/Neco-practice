import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const socials = [
    { name: <FaInstagram /> },
    { name: <FiFacebook /> },
    { name: <RiTwitterXFill /> },
  ];

  return (
    <div className="mb-90 bg-[#054C0F] text-gray-300 text-[17px] font-semibold py-[4rem] px-[1rem] md:flex justify-center items-center md:px-[7rem]">
      <div className="hidden md:flex flex-col gap-7 text-white md:w-[35%]">
        <img src="neco-logo.png" alt="neco logo alt" className="w-[90px]" />
        <div className="flex gap-6 ">
          {socials.map((logo, index)=>(
            <div key={index}>
                <p className="bg-">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:w-[65%]">
        <div className="flex flex-col gap-6 text-white">
          <h3>Use Links</h3>
          <ul className="flex flex-col gap-4 text-gray-300 ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Management</a>
            </li>
            <li>
              <a href="#">Mission & Vision</a>
            </li>
            <li>
              <a href="#">State Offices</a>
            </li>
            <li>
              <a href="#">Our Blog</a>
            </li>
            <li>
              <a href="#">About NECO</a>
            </li>
            <li>
              <a href="FAQ"></a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
        {/* ............................. */}
        <div className="flex flex-col gap-6 text-white">
          <h3>Our Portal</h3>
          <ul className="flex flex-col gap-4 text-gray-300 ">
            <li>
              <a href="#">Our Examination</a>
            </li>
            <li>
              <a href="#">NECO Results</a>
            </li>
            <li>
              <a href="#">Payments</a>
            </li>
            <li>
              <a href="#">Centres</a>
            </li>
            <li>
              <a href="#">Operators</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        {/* ......................................... */}
        <div className="flex flex-col gap-6 text-white">
          <h3>Contact Us</h3>
          <ul className="flex flex-col gap-4 text-gray-300 ">
            <li>
              <a href="#">07012345678</a>
            </li>
            <li>
              <a href="#">09012345678</a>
            </li>
            <li>
              <a href="#">08112345678</a>
            </li>
            <li>
              <a href="#">09012345678</a>
            </li>
            <li>
              <a href="#">07023456789</a>
            </li>
            <li>
              <a href="#">info@neco.gov.ng</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
