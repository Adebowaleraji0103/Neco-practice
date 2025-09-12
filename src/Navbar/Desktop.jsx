
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
    <div>
      <div className="flex items-center">
        <h1 className="text-2xl">Logo</h1>

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
    </div>
  );
};

export default Desktop;
