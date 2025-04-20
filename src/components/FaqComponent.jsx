import { Accordion, Container, Row, Col } from 'react-bootstrap'
import {faq} from '../data/index'

const FaqComponents = () => {
    return (
        <div className='faq py-5' style={{ background: '#fdfdfd' }}>
            <Container>
                <Row>
                    <Col>
                        <h2 className='text-center fw-bold mb-5' style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '2rem',
                            color: '#222'
                        }}>
                            🤔 Pertanyaan yang <span style={{ color: '#ff4b2b' }}>Sering Ditanya</span> Tentang Kita!
                        </h2>
                    </Col>
                </Row>
                <Row className='row-cols-lg-2 row-cols-1 g-4'>
                    {faq.map((faq) => {
                        return (
                            <Col key={faq.id}>
                                <Accordion flush>
                                    <Accordion.Item eventKey={faq.eventKey}
                                        style={{
                                            border: '1px solid rgba(255, 75, 43, 0.2)',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                            background: '#fff',
                                            transition: 'all 0.3s ease-in-out'
                                        }}
                                    >
                                        <Accordion.Header style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontWeight: '600',
                                            fontSize: '1.05rem',
                                            color: '#222'
                                        }}>
                                            {faq.title}
                                        </Accordion.Header>
                                        <Accordion.Body style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            color: '#555',
                                            background: '#fffdfd',
                                            borderTop: '1px solid rgba(0,0,0,0.05)',
                                            lineHeight: '1.7'
                                        }}>
                                        <small className="fw-bold">{faq.desc}</small>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
    
}

export default FaqComponents;