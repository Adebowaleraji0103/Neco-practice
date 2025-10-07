const NavbarLink = [
  { label: "Home", href: "home" },
  { label: "About Us", href: "#about" },
  { label: "Our Exam", href: "exam" },
  { label: "Payment", href: "payment" },
  { label: "FAQ", href: "faq" },
  { label: "Support", href: "support" },
];

// const NavbarLink = () => {
//   return (
//     <ul className="flex flex-col gap-6 text-[15px] text-gray-500">
//       {Navlinks.map((nav, index) => (
//         <li key={index}>
//           <a href={nav.href}>{nav.label}</a>
//         </li>
//       ))}
//     </ul>
//   );
// };

export default NavbarLink;
