import './styles.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <Container>
                <Row>
                    <Col className='container d-flex justify-content-center'><h1 className='fw-bold p-2 text-center' id="main-title">{greeting}</h1></Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}

export default ItemListContainer