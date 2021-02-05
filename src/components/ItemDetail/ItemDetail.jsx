import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ItemCountComponent from '../ItemCount/ItemCount'

const ItemDetail = ({ productDetail }) => {

    const handleAdd = (itemAmount) => {
        console.log(`Se agregarán ${itemAmount} producto/s al carrito.`)
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={productDetail.imgUrl} />
            <Card.Body>
                <Card.Title>{productDetail.name}</Card.Title>
                <Card.Text>
                    {productDetail.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Precio: $ {productDetail.price}</ListGroupItem>
                <ListGroupItem>Stock: {productDetail.stock}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <ItemCountComponent initial= {productDetail.initial} stock= {productDetail.stock} onAdd={handleAdd} />
            </Card.Body>
        </Card>
    )
}

export default ItemDetail
