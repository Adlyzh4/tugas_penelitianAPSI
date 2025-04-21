import { Routes, Route, useLocation } from "react-router-dom";
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
import IncomePage from "./pages/incomePage";
import ExpensePage from "./pages/expensePage";
import ReportPage from "./pages/reportPage";

function App() {
  const location = useLocation();

  // Semua path admin
  const isAdminPath = location.pathname.startsWith("/admin") ||
                      location.pathname.startsWith("/income") ||
                      location.pathname.startsWith("/expense") ||
                      location.pathname.startsWith("/report");

  return (
    <div>
      {/* Tampilkan Navbar hanya jika bukan halaman admin */}
      {!isAdminPath && <NavbarComponent />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/testi" element={<Testi />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/expense" element={<ExpensePage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>

      {/* Tampilkan Footer hanya jika bukan halaman admin */}
      {!isAdminPath && <FooterComponent />}
    </div>
  );
}

export default App;
