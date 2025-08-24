import Button from "./Button";
import ProductCard from "./ProductCard";
import Student from "./Studen";

function MainPropPractice() {
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

      <ProductCard title="Shoes" price="$50" />
      <ProductCard title="Shirt" price="$20" />
      <ProductCard title="Watch" price="$100" />
    </div>
  );
}
export default MainPropPractice;
