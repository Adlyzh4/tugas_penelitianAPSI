import { Container, Row, Col } from 'react-bootstrap';
import { menuTerbaru, semuaMenu } from '../data/index';
import React, { forwardRef } from 'react';

const MenuComponent = forwardRef(({ addToCart }, ref) => {
  const parseHarga = (hargaString) => {
    return parseInt(hargaString.replace(/[^\d]/g, ''), 10);
  };

  return (
    <div ref={ref} className="kelas-page bg-light">
      <div className="kelas py-5 min-vh-100">
        <Container>
          <Row className="mb-5">
            <Col>
              <h1 className="fw-bold text-center display-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ✨ Menu Rekomendasi dan Promo ✨
              </h1>
              <p className="text-center text-secondary" style={{ fontSize: '1.1rem' }}>
                Temukan rasa terbaik dari Chicken Sizzle yang siap menggoyang lidahmu 😋🔥
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {menuTerbaru.map((menu) => (
              <Col key={menu.id} md={6} lg={4}>
                <div
                  className="menu-card bg-white shadow rounded-4 h-100 position-relative d-flex flex-column promo-glow"
                  style={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    overflow: 'visible',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {/* Promo Ribbon */}
                  {menu.isPromo && (
                    <img
                      src={menu.promoLogo}
                      alt="Promo Logo"
                      className="position-absolute promo-logo"
                      style={{
                        top: '-60px',
                        left: '-20px',
                        width: '150px',
                        zIndex: 10,
                        borderRadius: '0 0 15px 15px',
                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                      }}
                    />
                  )}

                  <img
                    src={menu.image}
                    alt={menu.title}
                    className="w-100"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />

                  <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                      <div className="star text-warning mb-2">
                        <i className={menu.star1}></i>
                        <i >{menu.rating}</i>
                      </div>

                      <h5 className="fw-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {menu.title}
                      </h5>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div>
                        {menu.isPromo ? (
                          <div>
                            <span className="text-muted text-decoration-line-through me-2 fs-6">
                              {menu.price}
                            </span>
                            <span className="text-danger fw-bold fs-5">{menu.promoPrice}</span>
                          </div>
                        ) : (
                          <p className="text-danger fw-bold fs-5 m-0">{menu.price}</p>
                        )}
                      </div>

                      <button
                        className="btn text-white px-4 py-2"
                        style={{
                          background: 'linear-gradient(135deg, #ff416c, #ff4b2b)',
                          border: 'none',
                          borderRadius: '10px',
                          boxShadow: '0 4px 12px rgba(255, 75, 43, 0.3)',
                          fontFamily: 'Poppins, sans-serif',
                        }}
                        onClick={() => {
                          const hargaAsli = parseHarga(menu.price);
                          const hargaPromo = menu.promoPrice ? parseHarga(menu.promoPrice) : null;
                          const hargaFinal = menu.isPromo && hargaPromo !== null ? hargaPromo : hargaAsli;

                          addToCart({
                            id: menu.id,
                            title: menu.title,
                            price: hargaFinal,
                          });

                          // Tampilkan modal keranjang kalau perlu
                          const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
                          cartModal.show();
                        }}
                      >
                        {menu.buy}
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
});

export default MenuComponent;
