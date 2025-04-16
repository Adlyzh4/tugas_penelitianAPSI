import { Accordion, Container, Row, Col } from 'react-bootstrap'
import {faq} from '../data/index'

const FaqComponents = () => {
    return (
        <div className='faq'>
            <Container>
                <Row>
                    <Col>
                        <h2 className='text-center fw-bold'>Pertanyaan yg Mereka Sering Tanya Tentang Kita!</h2>
                    </Col>
                </Row>
                <Row className='row-cols-lg-2 row-cols-1 g-4 pt-5'>
                    {faq.map((data) => {
                        return (
                            <Col key={data.id }>
                                <Accordion className='shadow-sm'>
                                    <Accordion.Item eventKey={data.eventKey}>
                                        <Accordion.Header>{data.title}</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default FaqComponents;