import React from 'react'
import '../CartView/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartView = ({ product }) => {

    const { itemPrice, removeItem } = useContext(CartContext)

    return (
        <>
            <tbody className='text-center align-middle'>
                <tr>
                    <td><img className='cartProdImg img-fluid' src={product.item.imgUrl} alt="" /></td>
                    <td>{product.item.name}</td>
                    <td>{product.quantity}</td>
                    <td>$ {itemPrice(product)}</td>
                    <td><button id='trash-button' onClick={() => removeItem(product.item.id)}><FontAwesomeIcon id='trash-icon' icon={faTrashAlt} size='sm' /></button></td>
                </tr>
            </tbody>
            
        </>
    )
}

export default CartView
