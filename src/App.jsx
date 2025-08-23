import Button from "./props practice/Button";
import ProductCard from "./props practice/ProductCard";
import Student from "./props practice/Studen";

function App() {
  return (
    <div className="flex flex-col gap-1 pt-5">
      {/* <Student name = "Mubarak" age = {30}/>
      <Student name = "Habeeb" age = {20}/>
      <Student name = "Yusuf" age = {10}/> */}

      <Student name="Mubarak" />
      <Student name="Mathew" />
      <Student name="Sarah" />

      <Button label="Click Me" />
      <Button label="Submit" />
      <Button label="Delete" />

      <ProductCard />
    </div>
  );
}
export default App;
