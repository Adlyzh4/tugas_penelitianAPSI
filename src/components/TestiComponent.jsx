import { Container, Row, Col } from 'react-bootstrap';
import { testimonial } from '../data/index';
import FaqComponents from '../components/FaqComponent';

const TestiComponent = () => {
    return (
        <div className="testimonial-page py-5" style={{ background: "#fefefe" }}>
            <Container>
                <Row className="mb-4">
                    <Col>
                        <h1 className="fw-bold text-center" style={{ fontFamily: "Poppins, sans-serif" }}>
                            Apa Kata Mereka 💬
                        </h1>
                        <p className="text-center fw-medium text-muted">
                            Cerita nyata dari mereka yang sudah merasakan Chicken Sizzle.
                        </p>
                    </Col>
                </Row>
                <Row className="row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {testimonial.slice(0, 3).map((data) => (
                        <Col key={data.id} className="d-flex">
                            <div
                                className="p-4 rounded-4 shadow-sm w-100 d-flex flex-column justify-content-between"
                                style={{
                                    background: "rgba(255,255,255,0.6)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(0,0,0,0.05)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    minHeight: "280px"
                                }}
                                onMouseOver={(e) => {
                                    if (window.innerWidth > 768) {
                                        e.currentTarget.style.transform = "translateY(-5px)";
                                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
                                    }
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                                }}
                            >
                                <p className="text-muted mb-4" style={{ fontStyle: "italic", flexGrow: 1 }}>
                                    “{data.desc}”
                                </p>
                                <div className="d-flex align-items-center mt-auto">
                                    <img
                                        src={data.image}
                                        alt={data.name}
                                        className="rounded-circle me-3"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            objectFit: "cover",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                                        }}
                                    />
                                    <div>
                                        <h6 className="mb-0 fw-semibold">{data.name}</h6>
                                        <small className="text-danger fw-bold">{data.skill}</small>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

            </Container>
        </div>
    );
};

export default TestiComponent;
