import './styles.css'
import Badge from 'react-bootstrap/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidgetComponent = () => {
    const { cartBadge } = useContext(CartContext)

    return (

        <>
            <Link to='/cart'>
                <FontAwesomeIcon id='cart-icon' icon={faShoppingCart} size='lg' />
            </Link>
            <Badge variant="light">{cartBadge()}</Badge>
        </>
    )
}

export default CartWidgetComponent
