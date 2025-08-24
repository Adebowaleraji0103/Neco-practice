// import FirstDropDown from "./component/FirstDropDown";
// import MainPropPractice from "./props practice/MainPropPractice";

// function App() {
//   return (
//     <div>
//       <MainPropPractice />
//       <FirstDropDown/>


      
//     </div>
//   );
// }
// export default App;
import FirstDropDown from "./component/FirstDropDown";

function App() {
  return (
    <div className="flex flex-col gap-6 items-center pt-10">
      {/* First Dropdown */}
      <FirstDropDown
       label="Students" 
        options={["Mubarak", "Shade", "Ade"]} 
      />
      
      {/* Second Dropdown */}
      <FirstDropDown 
        label="Products" 
        options={["Shoes", "Shirt", "Watch"]} 
      />

      {/* Third Dropdown */}
      <FirstDropDown 
        label="Cities" 
        options={["Lagos", "Abuja", "Ibadan"]} 
      />
    </div>
  );
}

export default App;
