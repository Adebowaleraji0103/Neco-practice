import { useState } from "react";

const FirstDropDown = () => {
  const [setIsOpen, IsOpen] = useState(false);
  return (
    <div>
      <button  
      onClick={()=> {setIsOpen}}
      className="items-center flex justify-center m-auto bg-green-900 text-white font-semibold text-[20px] py-2 px-5">
        Menu
      </button>
    </div>
  );
};

export default FirstDropDown;
