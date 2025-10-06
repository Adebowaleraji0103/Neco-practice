import Button from "../component/Button";

const Navlink = [
  { label: "Home", href: "home" },
  { label: "About Us", href: "#about" },
  { label: "Our Exam", href: "exam" },
  { label: "Payment", href: "payment" },
  { label: "FAQ", href: "faq" },
  { label: "Support", href: "support" },
];

const Desktop = () => {
  return (
    <div className="flex justify-between items-center w-full">
      {/* <h1 className="text-2xl">Logo</h1> */}
      <img src="neco-logo.png" alt="neco-logo alt" className="w-[70px] md:w-[90px]"/>

      <ul className="relative gap-10 hidden flex-1 md:flex md:justify-center">
        {Navlink.map((nav, index) => (
          <li key={index}>
            <a className="hover:text-gray-400" href={nav.href}>
              {nav.label}
            </a>
          </li>
        ))}
      </ul>

      <Button />
    </div>
  );
};

export default Desktop;
