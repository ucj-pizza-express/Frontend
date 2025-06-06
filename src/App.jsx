import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Testimonial from "./Footer/Testimonial";
import Navbar from "./components/navbar"; 
import Hero from "./components/herosection";
import AboutSection from "./Pages/Homepage/AboutSection"
import Hero2 from "./Pages/Homepage/hero2"
import PizzaHero from './components/herosection';
import CustomerFavourites from "./Pages/Homepage/CustomerFavourites"
import Contact from "./Pages/ContactUS/Contact";
import OrderNow from "./Pages/Order/Orderpage";
import About from "./Pages/Aboutpage/About"
import Items from "./Pages/Shop/Items";
import Login from "./Login/Login";
import Signup from "./components/SignUp/SignUp";

function Home() {
  return (
    <div>
      <h1></h1>
    </div>
  );
}


function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <main className="main-content">
    //     <Routes>
    //       <Route path="/" element={<PizzaHero />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/shop" element={<Items />} /> 
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </main>
    // </Router>

    // <Login/>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/items" element={<Items />} /> */}
      </Routes>
    </Router>
  );
}
export default App;
