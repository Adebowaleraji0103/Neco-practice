import { useState } from "react";

const FirstDropDown = () => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button  
      onClick={()=> setIsOpen (!IsOpen)}
      className="relative items-center text-center flex justify-center m-auto bg-green-900 text-white font-semibold text-[20px] py-2 px-5">
        Menu
      </button>
      {IsOpen && (
        <ul className="absolute flex flex-col gap-4 px-[4rem] py-[1rem] shadow-lg shadow-gray-300">
            <li>Mubby</li>
            <li>Shade</li>
            <li>Ade</li>
        </ul>
      )}
    </div>
  );
};

export default FirstDropDown;
