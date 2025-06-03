import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Contact from "./Pages/ContactUS/Contact";
import OrderNow from "./Pages/Order/Orderpage";
import Adminpanel from "./Adminpanel/Adminpanel";
import Home from "./Pages/Homepage/Home";
import About from "./Pages/Aboutpage/About";
import Shop from "./Pages/Shoppage/Items";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
