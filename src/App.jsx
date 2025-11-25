import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./component/AboutPage/AboutPage";
import HomePage from "./component/HomePage/HomePage";
import Navbar from "./component/Navbar/Navbar";
import OurExam from "./component/Our Exam/OurExam";
import Payment from "./component/AboutPage/Payment";
import Footer from "./component/HomePage/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/exam" element={<OurExam />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
