import React from 'react'
import './styles.css'
import ItemCountComponent from '../ItemCount/ItemCount'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ product }) => {

    const { cart, addItem } = useContext(CartContext)

    const [addedToCart, setaddedToCart] = useState(false)

    const handleAdd = (itemAmount) => {

        addItem(product.id, itemAmount)
        setaddedToCart(true)

    }

    console.log(cart)

    return (
        <div className='card-detail container d-flex flex-wrap justify-content-center align-content-Center'>
            <div>
                <img className='img-fluid' src={product.imgUrl} alt="" />
            </div>
            <div className='prod-detail-cont text-center'>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <hr />
                <p className='fs-5'>Precio: <b>$ {product.price}</b></p>
                <p>Stock: {product.stock}</p>
                <div>
                    <ItemCountComponent initial={product.initial} stock={product.stock} onAdd={handleAdd} addedToCart={addedToCart} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
