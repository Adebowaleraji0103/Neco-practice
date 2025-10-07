import Hero from "./Hero";
import ImageSlider from "./ImageSlider";
import Navbar from "./Navbar/Navbar";
import NecoGlobalReach from "./NecoGlobalReach";
import Verification from "./Verification";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <ImageSlider/>
      <NecoGlobalReach/>
      <Verification/>
    </div>
  );
}
export default HomePage;
