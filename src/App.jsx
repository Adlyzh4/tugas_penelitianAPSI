import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import FaqPage from "./pages/FaqPage";
import Testi from "./pages/Testi";
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/menu" Component={Menu} />
        <Route path="/about" Component={About} />
        <Route path="/testi" Component={Testi} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/contact" Component={Contact} />
      </Routes>

      <FooterComponent />
    </div>
  );

}

export default App  
