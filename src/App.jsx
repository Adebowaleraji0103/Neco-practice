import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./component/AboutPage/AboutPage";
import HomePage from "./component/HomePage/HomePage";
import Navbar from "./component/HomePage/Navbar/Navbar";
import Footer from "./component/HomePage/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
