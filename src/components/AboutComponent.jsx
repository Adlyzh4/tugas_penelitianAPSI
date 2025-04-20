import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import logoImage from '../assets/img/logo.png'
import { Group } from '../data/index';

const AboutComponent = () => {
    return (
        <div className="container py-5">
            <Container>
                {/* Judul */}
                <h1 className="text-center fw-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: 'black' }}>
                    Tentang Kami
                </h1>
                <p className="lead text-center mb-5" style={{ maxWidth: "900px", margin: "0 auto" }}>
                    Kami adalah tim yang berdedikasi untuk membantu UMKM Chicken Sizzle berkembang dengan memanfaatkan teknologi informasi. Proyek ini dibuat oleh lima orang mahasiswa sebagai bagian dari tugas mata kuliah Analisa dan Perancangan Sistem Informasi.
                </p>
    
                {/* Mitra */}
                <h3 className="text-center mb-4 fw-semibold">Mitra Kami</h3>
                <div className="row justify-content-center mb-5">
                    <div className="col-md-6 col-lg-4">
                        <div
                            className="card border-0 rounded-4 shadow"
                            style={{
                                background: 'white',
                                transition: 'transform 0.3s',
                            }}
                        >
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
                    </div>
                </div>
    
                {/* Tim Pembuat */}
                <h3 className="text-center mb-4 fw-semibold">Tim Pengembang</h3>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                    {Group.map((Group, idx) => (
                        <div className="col" key={idx}>
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
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
    
    
};

export default AboutComponent;
