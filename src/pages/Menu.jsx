import { Container, Row, Col } from 'react-bootstrap';
import { semuaMenu } from '../data/index';
import React, { forwardRef } from 'react';


const Menu = forwardRef(({ addToCart }, ref) => {
    const parseHarga = (hargaString) => {
        return parseInt(hargaString.replace(/[^\d]/g, ''), 10);
    };

    

    const renderKategori = (kategoriName, semuaMenu) => (
        <>
            <Row className="mb-4 mt-5">
                <Col>
                    <h2 className="fw-bold text-center text-uppercase" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem' }}>
                        {kategoriName}
                    </h2>
                </Col>
            </Row>

            <Row className="g-4">
                {semuaMenu.map(menu => (
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
                                        <i className={menu.star1}></i> <i>{menu.rating}</i>
                                    </div>

                                    <h5 className="fw-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {menu.title}
                                    </h5>
                                </div>

                                <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mt-4">
                                    <div className="d-flex flex-column">
                                        {menu.isPromo ? (
                                        <>
                                            <span className="text-muted text-decoration-line-through" style={{ fontSize: '0.9rem' }}>
                                            {menu.price}
                                            </span>
                                            <span className="text-danger fw-bold" style={{ fontSize: '1.2rem' }}>
                                            {menu.promoPrice}
                                            </span>
                                        </>
                                        ) : (
                                        <span className="text-danger fw-bold" style={{ fontSize: '1.2rem' }}>
                                            {menu.price}
                                        </span>
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
                                        minWidth: '150px', // supaya tombol ga terlalu kecil di hp
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
        </>
    );

    return (
        <div ref={ref} className="kelas-page bg-light">
            <div className="kelas py-5 min-vh-100">
                <Container>
                    <Row className="mb-5">
                        <Col>
                            <h1 className="fw-bold text-center display-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                ✨ Semua Menu dan Promo ✨
                            </h1>
                            <p className="text-center text-secondary" style={{ fontSize: '1.1rem' }}>
                                Temukan rasa terbaik dari Chicken Sizzle yang siap menggoyang lidahmu 😋🔥
                            </p>
                        </Col>
                    </Row>

                    {renderKategori("Makanan", semuaMenu.makanan)}
                    {renderKategori("Add-on", semuaMenu.addon)}
                    {renderKategori("Cemilan", semuaMenu.cemilan)}
                    {renderKategori("Minuman", semuaMenu.minuman)}
                </Container>
            </div>
        </div>
    );
});

export default Menu;
