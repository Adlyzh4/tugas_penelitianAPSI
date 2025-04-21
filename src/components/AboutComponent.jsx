import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logoImage from '../assets/img/logo.png';
import { Group } from '../data/index';

const AboutComponent = () => {
    return (
        <div className="container py-5">
            <Container>

                {/* Judul Section */}
                {/* Tentang Kami dan Mitra dibagi 2 kolom */}
                <Row className="align-items-center mb-5">
                    {/* Kolom Kiri: Tentang Kami */}
                    <Col md={6} className="mb-4 mb-md-0">
                <h1 className="text-center fw-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: 'black' }}>
                    Tentang Kami
                </h1>
                        <p className="lead" style={{ textAlign: "justify" }}>
                            Kami adalah tim yang berdedikasi untuk membantu UMKM <b>Chicken Sizzle</b> berkembang dengan memanfaatkan teknologi informasi. Proyek ini dibuat oleh lima orang mahasiswa sebagai bagian dari tugas mata kuliah Analisa dan Perancangan Sistem Informasi.
                        </p>
                    </Col>

                    {/* Kolom Kanan: Mitra */}
                    <Col md={6}>
                        <div className="card border-0 rounded-4 shadow">
                            <div className="card-body text-center p-4">
                                <div
                                    className="bg-white rounded-circle mx-auto d-flex align-items-center justify-content-center shadow-sm"
                                    style={{ width: '120px', height: '120px', overflow: 'hidden' }}
                                >
                                    <img
                                        src={logoImage}
                                        alt="Logo UMKM"
                                        className="img-fluid"
                                        style={{ maxWidth: '80%', maxHeight: '80%' }}
                                    />
                                </div>
                                <h5 className="card-title fw-bold mt-3" style={{ fontFamily: 'Poppins, sans-serif', color: 'black' }}>
                                    Chicken Sizzle
                                </h5>
                                <p className="card-text text-muted px-2">
                                    UMKM kuliner ayam crispy modern yang sedang berkembang dan berkolaborasi dalam proyek digitalisasi ini.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Tim Pembuat */}
                <h3 className="text-center mb-4 fw-semibold">Tim Pengembang</h3>
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                    {Group.map((Group, idx) => (
                        <Col key={idx}>
                            <div
                                className="card border-0 h-100 shadow-sm rounded-4"
                                style={{
                                    background: 'linear-gradient(135deg, #fdfdfd, #f9f9f9)',
                                    transition: 'transform 0.3s',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <div className="card-body text-center p-4">
                                    <img
                                        src={Group.image}
                                        alt={Group.name}
                                        className="rounded-circle mb-3 border border-2 border-danger-subtle shadow"
                                        width="90"
                                        height="90"
                                    />
                                    <h5 className="card-title fw-semibold" style={{ color: '#222' }}>{Group.name}</h5>
                                    <p className="card-text text-muted">{Group.role}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AboutComponent;
