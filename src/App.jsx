import './App.css'
import Navbar from './components/navbar'
import HeroSection from './components/herosection'
 import CustomerFavourites from "./pages/Homepage/CustomerFavourites"
import Hero2 from './pages/Homepage/hero2'
import AboutSection from './pages/Homepage/aboutsection'
function App() {

return(
    <>
    <Navbar/>  
<HeroSection/>
  <CustomerFavourites/>
   <Hero2/>
   <AboutSection/>
 
</>
)
}

export default App
