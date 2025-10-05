import Navbar from "./Navbar/Navbar";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import ImageSlider from "./component/ImageSlider";
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
      <Footer/>
    </div>
  );
}
export default App;
