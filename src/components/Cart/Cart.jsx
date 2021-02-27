import React from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/table'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartView from '../CartView/CartView';
import { Link } from 'react-router-dom';

const CartComponent = () => {

    const { cart, clearCart, totalPrice } = useContext(CartContext)
    
    if(cart.length === 0){
        return <div className='container d-flex flex-column justify-content-center align-items-center'><h2 className='fw-bold p-2 text-center'>Su carrito está vacío!</h2><Link to='/'><Button>Buscar productos</Button></Link></div>
    } else{
        return <div className='container d-flex justify-content-around flex-wrap'>
        <h1 className='fw-bold p-2 text-center'>CARRITO DE COMPRAS</h1>
        <Table striped bordered hover>
            <thead>
                <tr className='text-center'>
                    <th></th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            {cart.map((product) => {
                return <CartView key={product.item.id} product={product} />
            })}
        </Table>
        <h3>Total: $ {totalPrice()}</h3>
        <Button variant="danger" onClick={() => clearCart()}>Limpiar carrito</Button>
    </div>
    }
}

export default CartComponent
