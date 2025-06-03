import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Contact from "./Pages/ContactUS/Contact";
import OrderNow from "./Pages/Order/Orderpage";
import About from "./Pages/Aboutpage/About"

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
      <main className="main-content">
        <Routes>
          <Route path="/" element={<PizzaHero />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>

    // </Router>
    // <PizzaHero/>
    //  <Contact/>
      //  <OrderNow/>
  );
}

export default App;
