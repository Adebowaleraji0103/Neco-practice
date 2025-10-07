import Navbar from "./component/HomePage/Navbar/Navbar";
import Footer from "./component/HomePage/Footer";
import Hero from "./component/HomePage/Hero";
import ImageSlider from "./component/HomePage/ImageSlider";
import LatestNews from "./component/HomePage/LatestNews";
import NecoGlobalReach from "./component/HomePage/NecoGlobalReach";
import Verification from "./component/HomePage/Verification";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImageSlider />
      <NecoGlobalReach />
      <Verification />
      <LatestNews />
      <Footer />
    </div>
  );
}
export default App;
