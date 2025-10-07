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
    <div className="flex flex-col gap-[3rem] py-[4rem] px-[1rem] bg-[#054C0F] text-gray-300 text-[17px] font-semibold md:px-[7rem] md:py-[7rem]">
      <div className=" md:flex justify-center items-center ">
        <div className="hidden md:flex flex-col gap-7 text-white md:w-[35%]">
          <img src="neco-logo.png" alt="neco logo alt" className="w-[90px]" />
          <div className="flex gap-6 ">
            {socials.map((logo, index) => (
              <div key={index}>
                <p className="bg-[#4A9E52] px-3 py-3 rounded-full">
                  <a href=""> {logo.name}</a>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-[1.5rem] grid grid-cols-2 gap-10 md:grid-cols-3 md:w-[65%]">
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
      <div className="flex flex-col gap-[2rem]">
        <span className="w-full h-[1px] inline-block bg-gray-300 "></span>
        <div className="flex flex-col gap-4 text-center text-white md:flex-row md:justify-between ">
          <p>© 2025 Copyright - National Examinations Council.</p>
          <p>
            National Examinations Council (NECO) Km 8, Bida Road, P.M.B 159,
            Minna, Nigeria.
          </p>
        </div>
        <p className="text-white text-[17px] font-normal">
          This website is a personal project created for educational and
          practice purposes. It is inspired by the design and content of
          <a
            href="https://neco.gov.ng/"
            className="text-green-400 font-bold mx-2"
          >
            neco.gov.ng
          </a>
          but is not affiliated with or endorsed by the original creators. Some
          elements have been modified to suit the scope of this project.
        </p>
      </div>
    </div>
  );
};

export default Footer;
