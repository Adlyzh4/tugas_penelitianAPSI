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
        <Navbar expand="lg" className={`navbar ${changeColor ? "color-active" : ""}`}>
            <Container>
                <Navbar.Brand href="#home" className="fs-3 fw-bold">Chicken Sizzle.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {navLinks.map((link) => (
                            <div className="nav-link" key={link.id}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => isActive ? "active" : ""}
                                    end
                                >
                                    {link.text}
                                </NavLink>
                            </div>
                        ))}
                    </Nav>
                    <div className="text-center">
                        <button className="btn btn-outline-danger rounded-1 me-2">Join With Us</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponents;
