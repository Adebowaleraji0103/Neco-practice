const Footer = () => {
  return (
    <div className="mb-90 bg-[#054C0F] text-gray-300 text-[17px] font-semibold py-[4rem] px-[1rem] md:flex justify-center items-center md:px-[7rem]">
      <div className="hidden md:flex flex-col text-white md:w-[35%]">
        <h2>Logo</h2>
        <div className="flex gap-3">
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Twitter</a>
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
