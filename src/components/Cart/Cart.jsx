import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/table'
import Form from 'react-bootstrap/Form'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartView from '../CartView/CartView';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app'
import '@firebase/firestore'
import { getFirestore } from '../../firebase';

const CartComponent = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirmation, setEmailConfirmation] = useState('')
    const [phone, setPhone] = useState('')
    const { cart, clearCart, totalPrice } = useContext(CartContext)

    const finalizarCompra = () => {

        if (email === emailConfirmation) {
            console.log(cart)
            const newOrder = {
                buyer: { name: name, emai: email, phone: phone },
                items: [...cart],
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: totalPrice()
            }

            const db = getFirestore()
            const ordersCollection = db.collection("orders")
            ordersCollection.add(newOrder).then((value) => {
                let orderId = value.id
                alert(`Su orden fue creada correctamente. Id: ${orderId}`)
            })
        }else{
            alert('El email ingresado no coincide con su confirmación. Por favor ingréselo nuevamente.')
        }

    }

    if (cart.length === 0) {
        return <div className='container d-flex flex-column justify-content-center align-items-center'><h2 className='fw-bold p-2 text-center'>Su carrito está vacío!</h2><Link to='/'><Button>Buscar productos</Button></Link></div>
    } else {
        return <div className='container d-flex flex-column flex-wrap'>
            <div className='d-flex flex-column'>
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
            </div>
            <div className='d-flex justify-content-around'>
                <h3>Total: $ {totalPrice()}</h3>
                <Button variant="danger" onClick={() => clearCart()}>Limpiar carrito</Button>
            </div>
            <div className='d-flex justify-content-around align-items-center mb-2'>

                <Form>
                    <h4>Complete sus datos</h4>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre y apellido:</Form.Label>
                        <Form.Control size="sm" type="email" placeholder="Nombre y Apellido" onChange={(e) => { setName(e.target.value) }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control size="sm" type="email" placeholder="ejemplo@gmail.com" onChange={(e) => { setEmail(e.target.value) }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Ingrese nuevamente su email:</Form.Label>
                        <Form.Control size="sm" type="email" placeholder="ejemplo@gmail.com" onChange={(e) => { setEmailConfirmation(e.target.value) }} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Teléfono:</Form.Label>
                        <Form.Control size="sm" type="email" placeholder="11-1111-1111" onChange={(e) => { setPhone(e.target.value) }} />
                    </Form.Group>
                </Form>


                <Button variant="success" onClick={() => finalizarCompra()}>Finalizar compra</Button>
            </div>
        </div>
    }
}

export default CartComponent
