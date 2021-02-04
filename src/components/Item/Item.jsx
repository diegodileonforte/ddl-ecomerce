import React from 'react'
import Card from 'react-bootstrap/Card'

const Item = ({ product }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.imgUrl} />
            <Card.Body className='text-center'>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Precio: $ {product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Item
