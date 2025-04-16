import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const FooterComponents = () => {
    return (
        <div className='footer py-5'>
            <Container>
                <Row className='d-flex justify-content-between'>
                    <Col lg="5">
                        <h3 className='fw-bold'>Chicken Sizzle.</h3>
                        <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor molestiae asperiores officiis alias tenetur fuga eum sequi dolore quis?
                        </p>
                        <div className='no mb-1 mt-4'>
                            <Link className='text-decoration-none'>
                                <i className='fa-brands fa-whatsapp'></i>
                                <p className='m-0'>+62 123-456-78912</p>
                            </Link>
                        </div>
                        <div className='mail'>
                            <Link className='text-decoration-none'>
                                <i className='fa-regular fa-envelope'></i>
                                <p className='m-0'>Email for Business</p>
                            </Link>
                        </div>
                    </Col>
                    <Col className='d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
                        <h5 className='fw-bold'>Main Menu</h5>
                        <Link to="home">Home</Link>
                        <Link to="menu">Menu</Link>
                        <Link to="testimonial">Testi</Link>
                        <Link to="faq">FAQ</Link>
                    </Col>
                    <Col lg="4" className='mt-lg-0 mt-5'>
                        <h5 className='fw-bold mb-3'>Masukan Email Anda Untuk Promo Selanjutnya!</h5>
                        <div className='notif'>
                            <input type="text" placeholder='Masukan disini..' />
                            <button className='btn btn-danger rounded-end rounded-0'>Submit</button>
                        </div>
                        <div className='social mt-2'>
                            <i className='fa-brands fa-facebook'></i>
                            <i className='fa-brands fa-twitter'></i>
                            <i className='fa-brands fa-instagram'></i>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='text-center px-md-0 px-3'>&copy; Copyright{new Date().getFullYear()} by <span className='fw-bold'>Chicken Sizzle Team</span> ,
                            All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default FooterComponents;