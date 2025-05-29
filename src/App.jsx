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
        <Route path="/" element={<PizzaHero/> } />
        
      </Routes> 
      <CustomerFavourites/>
       <Hero2/>
      <pizzaData />
      <AboutSection />
 
      
      <Testimonial />
      <Footer />

    </Router>
  );
}
export default App;
