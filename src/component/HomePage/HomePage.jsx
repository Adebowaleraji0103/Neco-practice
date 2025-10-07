import Hero from "./Hero";
import ImageSlider from "./ImageSlider";
import Navbar from "./Navbar/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <ImageSlider/>
    </div>
  );
}
export default HomePage;
