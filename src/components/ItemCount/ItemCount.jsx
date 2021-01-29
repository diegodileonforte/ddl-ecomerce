import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './styles.css'

const ItemCountComponent = (props) => {

    const [count, setCount] = useState(props.initial)

    if (props.initial === 0) {

        return <div className='container d-flex justify-content-center text-align-center' ><h1>Producto sin stock</h1></div>
    }

    else {

        return (
            <div className='container'>
                <div className='d-flex justify-content-around text-align-center' >
                    <Button variant="outline-danger" size="sm" onClick={() => {

                        if (count > props.initial) {
                            setCount(count - 1)
                        }

                    }}>-</Button>

                    <h1 className="text-align-center">{count}</h1>

                    <Button variant="outline-primary" size='sm' onClick={() => {

                        if (count < props.stock) {
                            setCount(count + 1)
                        }

                    }}>+</Button>

                </div>
                <div className="d-flex justify-content-center">
                    <Button variant="outline-success" onClick={() =>

                        console.log(`Se agregarán ${count} productos al carrito`)

                    }>Agregar</Button>
                </div>
            </div>
        )
    }
}

export default ItemCountComponent
