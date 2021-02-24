import React from 'react'
import Button from 'react-bootstrap/Button';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartComponent = () => {

    const { clearCart } = useContext(CartContext)

    return (
        <div>
            <h1>Carrito de compras</h1>
            <Button variant="danger" onClick={() => clearCart()}>Limpiar carrito</Button>
        </div>
    )
}

export default CartComponent
