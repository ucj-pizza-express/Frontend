import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/Aboutpage/About";
import Footer from "./Footer/Footer";
import Testimonial from "./Footer/Testimonial";
import Navbar from "./components/navbar";  
import Herosection from "./components/herosection";





function Home() {
  return (
    <div>
      <h1></h1>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Herosection />
      <Testimonial />
      <Footer />
    </Router>
  );
}
export default App;
