import React from 'react'
import Item from '../Item/Item'
import CardGroup from 'react-bootstrap/CardGroup'

const ItemList = ({ products }) => {
    return (

        <CardGroup>

            {products.map((product) => {
                return <Item key={product.id} product={product} />
            })}

        </CardGroup>
    )
}

export default ItemList
