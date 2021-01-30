import './styles.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ItemCountComponent from '../components/ItemCount/ItemCount.jsx'


const ItemListContainer = ({ greeting }) => {
    
    const handleAdd = (itemAmount) =>{
        console.log(`Se agregarán ${itemAmount} producto/s al carrito.`)
    }

    return (
        <>
            <Container>
                <Row>
                    <Col className='container d-flex justify-content-center'><h1 className='fw-bold p-2 text-center' id="main-title">{greeting}</h1></Col>
                </Row>
                <Row>
                    <Col><ItemCountComponent initial={1} stock={5} onAdd={handleAdd} /></Col>
                </Row>
            </Container>
        </>
    )
}

export default ItemListContainer