import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/Aboutpage/About";
import Footer from "./Footer/Footer";
import Testimonial from "./Footer/Testimonial";
import Navbar from "./components/navbar";  
import Herosection from "./components/herosection";
import AboutSection from "./Pages/Homepage/AboutSection";
import CustomerFavourites from "./Pages/Homepage/CustomerFavourites";
import Hero2 from "./Pages/Homepage/hero2";



function App() {
  return (
    <Router>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
