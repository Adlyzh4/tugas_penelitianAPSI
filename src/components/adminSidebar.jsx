import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AdminNavbar = () => {
  const [show, setShow] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeBackgroundColor = () => {
    setChangeColor(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);
    return () => window.removeEventListener("scroll", changeBackgroundColor);
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className={`navbar py-3 shadow-sm fixed-top ${changeColor ? "color-active" : ""}`}
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          transition: 'all 0.5s ease'
        }}
      >
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand className="fs-4 fw-bold text-danger-emphasis" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Admin Panel<span style={{ color: '#ff5555' }}> 💸</span>
          </Navbar.Brand>

          {/* Tombol menu selalu tampil */}
          <button
            className="btn btn-danger"
            onClick={handleShow}
            style={{
              borderRadius: '10px',
              fontWeight: 'bold',
              padding: '6px 14px',
              boxShadow: '0 4px 10px rgba(244,63,94,0.4)',
              fontSize: '1.1rem'
            }}
          >
            ☰ Menu
          </button>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start"
        style={{ background: 'linear-gradient(to bottom, #f43f5e, #f97316)', color: '#fff' }}
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>💸 Admin Panel</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
  <Nav className="flex-column gap-3">
    <NavLink
      className="text-white text-decoration-none nav-hover"
      to="/admin"
      onClick={handleClose}
    >🏠 Dashboard</NavLink>
    <NavLink
      className="text-white text-decoration-none nav-hover"
      to="/income"
      onClick={handleClose}
    >📥 Pemasukan</NavLink>
    <NavLink
      className="text-white text-decoration-none nav-hover"
      to="/expense"
      onClick={handleClose}
    >📤 Pengeluaran</NavLink>
    <NavLink
      className="text-white text-decoration-none nav-hover"
      to="/report"
      onClick={handleClose}
    >📊 Laporan</NavLink>
    <a
      className="text-white text-decoration-none nav-hover"
      href="/"
      onClick={handleClose}
    >🚪 Logout</a>
  </Nav>
</Offcanvas.Body>

      </Offcanvas>
    </>
  );
};

export default AdminNavbar;
