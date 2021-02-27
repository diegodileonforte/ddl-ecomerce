import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './styles.css'

const ItemCountComponent = ({ initial, stock, onAdd, addedToCart }) => {

    const [count, setCount] = useState(initial)

    const restar = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    if (initial === 0) {
        return <div className='container d-flex justify-content-center text-align-center' ><p>Producto sin stock</p></div>
    }

    else {
        return (
            <div className='container d-flex flex-column align-content-around'>
                <div className='d-flex justify-content-around text-align-center' >
                    <Button variant='outline-danger' size='sm' onClick={() => restar()}>-</Button>

                    <b className='text-align-center'>{count}</b>

                    <Button variant='outline-primary' size='sm' onClick={() => sumar()}>+</Button>

                </div>
                <div className='d-flex justify-content-center m-2'>
                    {addedToCart ? <Link to='/cart'><Button variant='outline-success'>Terminar compra</Button></Link> : <Button variant='outline-success' onClick={() => onAdd(count)}>Agregar al carrito</Button>}
                </div>
            </div>
        )
    }
}

export default ItemCountComponent
