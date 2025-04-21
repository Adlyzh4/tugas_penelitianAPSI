import { Navbar, Container, Nav } from 'react-bootstrap';
import { navLinks } from '../data/index';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavbarComponents = () => {
    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
        setChangeColor(window.scrollY > 10);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackgroundColor);
        return () => window.removeEventListener("scroll", changeBackgroundColor);
    }, []);

    return (
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
                    <div className="text-center mt-2 mt-lg-0">
                        <button className="btn px-4 py-2 text-white fw-semibold"
                            style={{
                                background: 'linear-gradient(135deg, #ff416c, #ff4b2b)',
                                border: 'none',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(255, 75, 43, 0.3)',
                                transition: 'transform 0.2s ease-in-out'
                            }}
                            onClick={() => window.location.href = '/auth'}
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            Join With Us
                        </button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    
};

export default NavbarComponents;
