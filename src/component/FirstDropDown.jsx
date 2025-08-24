import { useState, useEffect, useRef } from "react";

const FirstDropDown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative flex flex-row justify-center">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-900 text-white font-semibold text-[20px] py-2 px-5 rounded"
      >
        {label}
      </button>

      {/* Dropdown list */}
      {isOpen && (
        <ul className="absolute top-full mt-2 left-1/2 -translate-x-1/2 
                       bg-white shadow-md rounded w-40 text-center">
          {options.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FirstDropDown;




// 
// import { useState, useEffect, useRef } from "react";

// const FirstDropDown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null); // reference to dropdown container

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       // if click is outside dropdown, close it
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     // listen for clicks on the whole page
//     document.addEventListener("mousedown", handleClickOutside);

//     // cleanup when component unmounts
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div ref={dropdownRef} className="relative flex justify-center">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-green-900 text-white font-semibold text-[20px] py-2 px-5 rounded"
//       >
//         Menu
//       </button>

//       {isOpen && (
//         <ul
//           className="absolute top-full mt-2 left-1/2 -translate-x-1/2 
//                      bg-white shadow-md rounded w-40 text-center"
//         >
//           <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Mubby</li>
//           <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Shade</li>
//           <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Ade</li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default FirstDropDown;

// 

