
import { Container, Row, Col } from 'react-bootstrap'
import { semuaMenu } from '../data/index'
import FaqComponents from '../components/FaqComponent'
import React, {forwardRef} from 'react'

const MenuComponent = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="kelas-page bg-light" >
            <div className="kelas py-5 min-vh-100 ">
                <Container>
                    <Row className="mb-5">
                        <Col>
                            <h1 className="fw-bold text-center display-5" style={{ fontFamily: 'Poppins, sans-serif' }}>✨ Menu Rekomendasi dan Promo ✨</h1>
                            <p className="text-center text-secondary" style={{ fontSize: '1.1rem' }}>
                                Temukan rasa terbaik dari Chicken Sizzle yang siap menggoyang lidahmu 😋🔥
                            </p>
                        </Col>
                    </Row>
    
                    <Row className="g-4">
                    {semuaMenu.map((menu) => (
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
                                //   boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
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
                                <i className={menu.star2}></i>
                                <i className={menu.star3}></i>
                                <i className={menu.star4}></i>
                                <i className={menu.star5}></i>
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
                                    document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' });
                                    setTimeout(() => {
                                    const modal = new bootstrap.Modal(document.getElementById('pesanModal'));
                                    modal.show();
                                    }, 500);
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

            <div className="modal fade" id="pesanModal" tabIndex="-1" aria-labelledby="pesanModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content rounded-4 shadow">
                <div className="modal-header">
                    <h5 className="modal-title" id="pesanModalLabel">Info Pemesanan</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body fs-5 text-center">
                    Jika ingin pesan, bisa hubungi kami melalui kontak yang tersedia. Bisa melalui WA, email atau bisa datang langsung ke tempat kami. Terima kasih! 😊
                </div>
                <div className="modal-footer justify-content-center">
                    <button type="button" className="btn btn-danger px-4" data-bs-dismiss="modal">Oke</button>
                </div>
                </div>
            </div>
            </div>

        </div>
    );
    
})

export default MenuComponent;