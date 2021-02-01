import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './styles.css'

const ItemCountComponent = ({ initial, stock, onAdd }) => {

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

        return <div className='container d-flex justify-content-center text-align-center' ><h1>Producto sin stock</h1></div>
    }

    else {

        return (
            <div className='container'>
                <div className='d-flex justify-content-around text-align-center' >
                    <Button variant="outline-danger" size="sm" onClick={() => restar()}>-</Button>

                    <h1 className="text-align-center">{count}</h1>

                    <Button variant="outline-primary" size='sm' onClick={() => sumar()}>+</Button>

                </div>
                <div className="d-flex justify-content-center">
                    <Button variant="outline-success" onClick={() => onAdd(count)}>Agregar</Button>
                </div>
            </div>
        )
    }
}

export default ItemCountComponent
