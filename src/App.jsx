import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Contact from "./Pages/ContactUS/Contact";
import OrderNow from "./Pages/Order/Orderpage";
import About from "./Pages/Aboutpage/About";
import Items from "./Pages/Shoppage/Items";
import PizzaHero from "./components/herosection";
import Adminpanel from "./Adminpanel/Adminpanel";
import Testimonial from "./Footer/Testimonial";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div>
      <h1></h1>
    </div>
  );
}


function App() {
  return (
/*<Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<PizzaHero />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Items />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>*/
    <Adminpanel />
    // </Router>
    // <PizzaHero/>
  //  <About />
    //  <Contact/>
      //  <OrderNow/>
     // <Testimonial />
  );
}

export default App;
