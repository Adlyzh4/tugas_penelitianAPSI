import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import FaqPage from "./pages/FaqPage";
import Testi from "./pages/Testi";
import About from './pages/About';
import Contact from './pages/Contact';
import AuthPage from './pages/AuthPage';
import AdminDashboard from './pages/AdminDashboard';


function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/testi" element={<Testi />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>

      <FooterComponent />
    </div>
  );

}

export default App  
