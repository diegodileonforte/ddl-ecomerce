import React from 'react'
import './styles.css'
import ItemCountComponent from '../ItemCount/ItemCount'
import { useState } from 'react'

const ItemDetail = ({ productDetail }) => {

    const [addedToCart, setaddedToCart] = useState(false)

    const handleAdd = (itemAmount) => {
        console.log(`Se agregarán ${itemAmount} producto/s al carrito.`)
        setaddedToCart(true)
    }

    return (
            <div className='card-detail container d-flex flex-wrap justify-content-center align-content-Center'>
                <div>
                    <img className='img-fluid' src={productDetail.imgUrl} alt="" />
                </div>
                <div className='prod-detail-cont text-center'>
                    <h2>{productDetail.name}</h2>
                    <p>{productDetail.description}</p>
                    <hr />
                    <p className='fs-5'>Precio: <b>$ {productDetail.price}</b></p>
                    <p>Stock: {productDetail.stock}</p>
                    <div>
                        <ItemCountComponent initial={productDetail.initial} stock={productDetail.stock} onAdd={handleAdd} addedToCart={addedToCart} />
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail
