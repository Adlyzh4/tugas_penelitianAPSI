import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const FooterComponents = () => {
    return (
        <div className='footer py-5' style={{
            background: 'linear-gradient(to right, #fcb045, #ff9a00, #ffd194)',
            color: '#2c2c2c',
            fontFamily: 'Poppins, sans-serif'
        }}>
            
            <Container>
                <Row className='d-flex justify-content-between'>
                    <Col lg="5">
                        <h3 className='fw-bold text-danger-emphasis mb-3' style={{ fontSize: '1.8rem' }}>
                            Chicken Sizzle<span style={{ color: '#ff5555' }}>.</span>
                        </h3>
                        <p className='desc text-muted'>
                            Chicken Sizzle menyajikan rasa terbaik untuk setiap pelanggan. Kenikmatan yang tidak terlupakan ada di setiap gigitannya 🍗✨
                        </p>
                        <div className='no mb-2 mt-4 d-flex align-items-center gap-2'>
                            <i className='fa-brands fa-whatsapp fs-5 text-success'></i>
                            <p className='m-0 text-dark'>+62 123-999-9999</p>
                        </div>
                        <div className='mail d-flex align-items-center gap-2'>
                            <i className='fa-regular fa-envelope fs-5 text-danger'></i>
                            <p className='m-0 text-dark'>ChickenSizzle@Gmail.com</p>
                        </div>
                    </Col>
    
                    <Col className='d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
                        <h5 className='fw-semibold mb-3'>Main Menu</h5>
                        {["Home", "Menu", "Testi", "FAQ", "About", "Contact"].map((text, idx) => (
                            <Link key={idx} to={text.toLowerCase()} className='text-decoration-none text-dark mb-2' style={{ transition: '0.3s' }}
                                onMouseOver={e => e.currentTarget.style.color = '#ff4b2b'}
                                onMouseOut={e => e.currentTarget.style.color = '#2c2c2c'}>
                                {text}
                            </Link>
                        ))}
                    </Col>
    
                    <Col lg="4" className='mt-lg-0 mt-5'>
                        <h5 className='fw-semibold mb-3'>Masukan Email Anda Untuk Promo Selanjutnya!</h5>
                        <div className='d-flex'>
                            <input type="text" className='form-control rounded-start rounded-0' placeholder='Masukan di sini..' />
                            <button className='btn btn-danger rounded-end rounded-0'>Submit</button>
                        </div>
                        <div className='social mt-3 d-flex gap-3'>
                            <i className='fa-brands fa-facebook fs-5 text-primary'></i>
                            <i className='fa-brands fa-twitter fs-5 text-info'></i>
                            <i className='fa-brands fa-instagram fs-5 text-danger'></i>
                        </div>
                    </Col>
                </Row>
    
                <hr className='my-4' style={{ borderTop: '1px solid #ccc' }} />
    
                <Row>
                    <Col>
                        <p className='text-center m-0 text-muted'>&copy; {new Date().getFullYear()} <span className='fw-bold text-dark'>Chicken Sizzle Team</span>, All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    
}
export default FooterComponents;