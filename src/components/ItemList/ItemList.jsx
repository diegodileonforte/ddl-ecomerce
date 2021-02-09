import React from 'react'
import Item from '../Item/Item'


const ItemList = ({ products }) => {
    return (

        <div className='container d-flex justify-content-around flex-wrap'>
            {products.map((product) => {
                return <Item key={product.id} product={product} />
            })}
        </div>

    )
}

export default ItemList
