import { Container, Row, Col } from 'react-bootstrap'
import logoImage from '../assets/img/logo.png'
import { menuTerbaru, dataSwiper, testimonial } from '../data/index'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import FaqComponent from '../components/FaqComponent'
import { useRef } from 'react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import MenuComponent from '../components/MenuComponent';
import TestiComponent from '../components/TestiComponent';
import ContactComponent from '../components/ContactComponent';


const HomePage = () => {

    let navigate = useNavigate();
    const menuRef = useRef(null);

    const scrollToMenu = () => {
        if (menuRef.current) {
            menuRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="homepage">
            <header
                className="w-100 min-vh-100 d-flex align-items-center"
                style={{
                    
                    paddingTop: '40px', 
                    paddingBottom: '100px',
                    overflow: 'hidden',
                    position: 'relative',
                    color: "#fff"
                }}
            >
                <Container>
                    <Row className="header-box align-items-center pt-3 flex-column-reverse flex-lg-row text-center text-lg-start">
                        <Col lg="6" className="mt-4 mt-lg-0">
                            <h1 className="mb-4 fw-bold" style={{
                                fontSize: '3rem',
                                fontFamily: 'Poppins, sans-serif',
                            }}>
                                Temukan <br />
                                <span style={{ color: '#fff6e0', textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                                    Steak Ayam Ter-Enak
                                </span> Disini
                            </h1>
                            <p className="mb-4" style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.6',
                                color: '#fceeee'
                            }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nemo quae ut harum! Expedita, nobis!
                            </p>
                            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                                <button
                                    className="btn btn-light btn-lg px-4 py-2"
                                    style={{
                                        borderRadius: '12px',
                                        fontWeight: 600,
                                        color: '#ff4b2b',
                                        boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                                        transition: 'transform 0.2s ease-in-out'
                                    }}
                                    onClick={() => navigate('/menu')}
                                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                    Lihat Menu
                                </button>
                                <button
                                    className="btn btn-outline-light btn-lg px-4 py-2"
                                    style={{
                                        borderRadius: '12px',
                                        fontWeight: 600,
                                        transition: 'all 0.2s ease-in-out'
                                    }}
                                    onClick={scrollToMenu}
                                    onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                                    onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                                >
                                    Lihat Promo
                                </button>
                            </div>
                        </Col>
                        <Col lg="6" className="d-flex justify-content-center mb-5 mb-lg-0">
                            <img
                                src={logoImage}
                                alt="logo-png"
                                className="img-fluid"
                                style={{
                                    maxWidth: '600px',
                                    transition: 'transform 0.5s ease',
                                    filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.2))'
                                }}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05) rotate(-2deg)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
                            />
                        </Col>
                    </Row>
                </Container>
            </header>
    
            <MenuComponent ref={menuRef} />
            <TestiComponent />
            <FaqComponent />
            <ContactComponent />
        </div>
    );
    
}

export default HomePage;