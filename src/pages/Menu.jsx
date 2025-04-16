
import { Container, Row, Col } from 'react-bootstrap'
import { semuaMenu } from '../data/index'
import FaqComponents from '../components/FaqComponent'

const Menu = () => {
    return (
        <div className='kelas-page'>
            <div className='kelas min-vh-100'>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='fw-bold text-center'>Semua Menu</h1>
                            <p className='fw-bold text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Col>
                    </Row>

                    <Row>
                    {semuaMenu.map((menu) => {
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
                </Container>
            </div>
            <div>
                <FaqComponents />

            </div>
        </div>

    )
}

export default Menu;