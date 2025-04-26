import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // ← Tambahkan ini
import 'react-toastify/dist/ReactToastify.css'; // ← Dan ini untuk styling toast
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

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existing = cartItems.find(i => i.id === item.id);
    if (existing) {
      setCartItems(cartItems.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      // Munculkan toast hanya kalau item pertama kali ditambahkan
      toast.success(`${item.title} berhasil ditambahkan ke keranjang! 🎉`, {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const isAdminPath =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/income") ||
    location.pathname.startsWith("/expense") ||
    location.pathname.startsWith("/report");

  return (
    <div>
      {/* Toast container harus dipasang di atas */}
      <ToastContainer />

      {!isAdminPath && (
        <NavbarComponent cartItems={cartItems} setCartItems={setCartItems} />
      )}

      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} cartItems={cartItems} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} cartItems={cartItems} />} />
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

      {!isAdminPath && <FooterComponent />}
    </div>
  );
}

export default App;
