import { Container, Row, Col } from 'react-bootstrap'
import { testimonial } from '../data/index'
import FaqComponents from '../components/FaqComponent'

const Testi = () => {
    return (
        <div className='testimonial-page'>
            <div className='testimonial'>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='fw-bold text-center'>Testi Kami Disini!</h1>
                            <p className='text-center fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, iusto.</p>
                        </Col>
                    </Row>
                    <Row className='row-cols-lg-3 row-cols-1'>
                        {testimonial.map((data) => {
                            return (
                                <Col key={data.id} className='shadow-sm'>
                                    <p className='desc shadow-sm'>{data.desc}</p>
                                    <div className='people'>
                                        <img src={data.image} alt="" />
                                        <div>
                                            <h5 className='mb-1'>{data.name}</h5>
                                            <p className='m-0 fw-bold'>{data.skill}</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>

                </Container>
            </div>
            <FaqComponents />
        </div>
    )
}

export default Testi;