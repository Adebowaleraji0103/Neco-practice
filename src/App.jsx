// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutPage from "./component/AboutPage/AboutPage";
// import HomePage from "./component/HomePage/HomePage";

import AboutPage from "./component/AboutPage/AboutPage";
import HomePage from "./component/HomePage/HomePage";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter> */}
      <HomePage/>
      <AboutPage/>

    </div>
  );
}
export default App;
