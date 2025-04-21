import { Accordion, Container, Row, Col } from 'react-bootstrap'
import { faq } from '../data/index'

const FaqComponents = () => {
    return (
        <div className='faq py-5' style={{ background: '#fdfdfd' }}>
            <Container>
                <Row>
                    <Col>
                        <h2 className='text-center fw-bold mb-4' style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                            color: '#222',
                            lineHeight: '1.4'
                        }}>
                            🤔 Pertanyaan yang <span style={{ color: '#ff4b2b' }}>Sering Ditanya</span> Tentang Kita!
                        </h2>
                    </Col>
                </Row>
                <Accordion flush defaultActiveKey="0"> {/* Diletakkan di luar map */}
                    <Row className='g-4'>
                        {faq.map((faq) => (
                            <Col key={faq.id} xs={12} md={12} lg={6}>
                                <Accordion.Item eventKey={faq.eventKey.toString()} // pastikan string
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
                                        fontSize: '1rem',
                                        color: '#222'
                                    }}>
                                        {faq.title}
                                    </Accordion.Header>
                                    <Accordion.Body style={{
                                        fontFamily: 'Poppins, sans-serif',
                                        color: '#555',
                                        background: '#fffdfd',
                                        borderTop: '1px solid rgba(0,0,0,0.05)',
                                        lineHeight: '1.7',
                                        fontSize: '0.95rem'
                                    }}>
                                        <small className="fw-medium">{faq.desc}</small>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Col>
                        ))}
                    </Row>
                </Accordion>
            </Container>
        </div>
    );
};

export default FaqComponents;
