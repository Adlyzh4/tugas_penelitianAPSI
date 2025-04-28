import { Navbar, Container, Nav, Modal, Button } from 'react-bootstrap';
import { navLinks } from '../data/index';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiShoppingCart, FiTrash2 } from 'react-icons/fi'; // pakai icon trash

const NavbarComponents = ({ cartItems = [], setCartItems }) => {
    const [changeColor, setChangeColor] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const changeBackgroundColor = () => {
        setChangeColor(window.scrollY > 10);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackgroundColor);
        return () => window.removeEventListener("scroll", changeBackgroundColor);
    }, []);

    const handleCheckout = () => {
        const message = cartItems.map(item => `- ${item.title} x${item.quantity} Rp.${item.price}`).join('%0A');
        const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const fullMessage = `Halo, saya ingin memesan:%0A${message}%0A%0ATotal: Rp ${total.toLocaleString('id-ID')}`;
        const whatsappLink = `https://wa.me/6287855770953?text=${fullMessage}`;
        window.open(whatsappLink, '_blank');
    };

    const handleRemoveItem = (indexToRemove) => {
        const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
        setCartItems(updatedCart);
    };

    return (
        <>
            <Navbar
                expand="lg"
                className={`navbar py-3 shadow-sm ${changeColor ? "color-active" : ""}`}
                style={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                    transition: 'background-color 0.5s ease, padding 0.5s ease, border-bottom 0.5s ease, backdrop-filter 0.5s ease'
                }}
            >
                <Container>
                    <Navbar.Brand href="/" className="fs-3 fw-bold text-danger-emphasis" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '1px' }}>
                        Chicken Sizzle<span style={{ color: '#ff5555' }}>.</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto gap-3">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.id}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `nav-link px-2 fw-semibold ${isActive ? "text-danger border-bottom border-danger" : "text-dark"}`
                                    }
                                    style={{
                                        transition: 'all 0.3s ease',
                                        fontSize: '1.1rem',
                                        fontFamily: 'Poppins, sans-serif'
                                    }}
                                    end
                                >
                                    {link.text}
                                </NavLink>
                            ))}
                        </Nav>

                        <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
                            <button
                                onClick={() => setShowCart(true)}
                                className="btn position-relative"
                                style={{ background: 'none', border: 'none' }}
                            >
                                <FiShoppingCart size={22} color="#ff4b2b" />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartItems.length}
                                </span>
                            </button>

                            <NavLink
                                to="/auth"
                                className="btn px-4 py-2 text-white fw-semibold"
                                style={{
                                    background: 'linear-gradient(135deg, #ff416c, #ff4b2b)',
                                    border: 'none',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 12px rgba(255, 75, 43, 0.3)',
                                    transition: 'transform 0.2s ease-in-out',
                                    fontFamily: 'Poppins, sans-serif',
                                }}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                Join With Us
                            </NavLink>

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Modal Keranjang */}
            <Modal show={showCart} onHide={() => setShowCart(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>🛒 Keranjang Pesanan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cartItems.length === 0 ? (
                        <p className="text-center">Keranjang masih kosong</p>
                    ) : (
                        <ul className="list-group list-group-flush">
                            {cartItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                >
                                    <div>
                                        x{item.quantity} {item.title}
                                        <div style={{ fontSize: '0.9rem', color: '#888' }}>
                                            Rp { (item.price * item.quantity).toLocaleString("id-ID") }
                                        </div>
                                    </div>

                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleRemoveItem(index)}
                                        style={{ borderRadius: '50%' }}
                                    >
                                        <FiTrash2 size={16} />
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCart(false)}>
                        Tutup
                    </Button>
                    {cartItems.length > 0 && (
                        <Button variant="success" onClick={handleCheckout}>
                            Checkout via WhatsApp
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default NavbarComponents;
