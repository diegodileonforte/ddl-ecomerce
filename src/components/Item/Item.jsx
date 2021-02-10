import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import '../Item/styles.css'

const Item = ({ product }) => {
    return (
        <Link className='link' to={`/item/${product.id}`}>
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={product.imgUrl} />
            <Card.Body className='text-center'>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Precio: $ {product.price}</Card.Text>
            </Card.Body>
        </Card>
        </Link>
    )
}

export default Item
