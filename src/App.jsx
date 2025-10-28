import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./component/AboutPage/AboutPage";
import HomePage from "./component/HomePage/HomePage";
import Navbar from "./component/HomePage/Navbar/Navbar";
import Footer from "./component/HomePage/Footer";
import AboutOurExam from "./component/Our Exam/AboutOurExam";
import Payment from "./component/AboutPage/Payment";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/exam" element={<AboutOurExam/>}/>
          <Route path="/payment" element={<Payment/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
