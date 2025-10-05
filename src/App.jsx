import Navbar from "./Navbar/Navbar";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import ImageSlider from "./component/ImageSlider";
import LatestNews from "./component/LatestNews";
import NecoGlobalReach from "./component/NecoGlobalReach";
import Verification from "./component/Verification";

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
