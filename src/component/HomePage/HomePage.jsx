import Footer from "./Footer";
import Hero from "./Hero";
import ImageSlider from "./ImageSlider";
import LatestNews from "./LatestNews";
// import Navbar from "./Navbar/Navbar";
import NecoGlobalReach from "./NecoGlobalReach";
import Verification from "./Verification";

function HomePage() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <ImageSlider />
      <NecoGlobalReach />
      <Verification />
      <LatestNews />
      <Footer />
    </div>
  );
}
export default HomePage;
