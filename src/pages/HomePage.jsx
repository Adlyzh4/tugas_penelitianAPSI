import { Container, Row, Col } from 'react-bootstrap'
import logoImage from '../assets/img/logo.png'
import { menuTerbaru, dataSwiper, testimonial } from '../data/index'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import FaqComponent from '../components/FaqComponent'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const HomePage = () => {

    let navigate = useNavigate();
    return (
        <div className="homepage">
            <header className="w-100 min-vh-100">
                <Container>
                    <Row className='header-box d-flex align-items-center pt-lg-5'>
                        <Col lg="6">
                            <h1 className='mb-4'>Temukan <br /> <span>Steak Ayam Ter-Enak </span> Disini</h1>
                            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nemo quae ut harum! Expedita, nobis!</p>
                            <button className='btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2' onClick={() => navigate('menu')}>Lihat Menu</button>
                            <button className='btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2'>Lihat Promo</button>
                        </Col>
                        <Col lg="6" className='pt-lg-0 pt-5'>
                            <img src={logoImage} alt="logo-png" />
                        </Col>
                    </Row>
                </Container>
            </header>
            <div className="kelas w-100 min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-center fw-bold'>Menu</h1>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Col>
                    </Row>
                    <Row>
                        {menuTerbaru.map((menu) => {
                            return <Col key={menu.id} className='shadow rounded'>
                                <img src={menu.image} alt="unsplash.com" className='w-100 mb-5 rounded-top' />
                                <div className='star mb-2 px-3'>
                                    <i className={menu.star1}></i>
                                    <i className={menu.star2}></i>
                                    <i className={menu.star3}></i>
                                    <i className={menu.star4}></i>
                                    <i className={menu.star5}></i>
                                </div>
                                <h5 className='mb-5 px-3'>{menu.title}</h5>
                                <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
                                    <p className='m-0 text-primary fw-bold'>{menu.price}</p>
                                    <button className='btn btn-danger rounded-1'>{menu.buy}</button>
                                </div>
                            </Col>
                        })}
                    </Row>
                    <Row>
                        <Col className='text-center'>
                            <button className='btn btn-success rounded-5 btn-lg' onClick={() => navigate("/menu")}>Lihat Semua Menu<i className='fa-solid fa-chevron-right ms-2'></i>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="testimonial py-5">
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-center fw-bold my-5'>Testimonial</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                }, 
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {dataSwiper.map((data) => {
                                return <SwiperSlide key={data.id} className='shadow-sm'>
                                    <p className='desc'>{data.desc}</p>
                                    <div className='people'>
                                        <img src={data.image} alt="" />
                                        <div>
                                            <h5 className='mb-1'>{data.name}</h5>
                                            <p className='m-0 fw-bold'>{data.skill}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </Row>
                </Container>
            </div>
                <FaqComponent />
        </div>
    )
}

export default HomePage;