import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const CartWidgetComponent = () => {
    return (

        <Link to='/cart'>
            <FontAwesomeIcon id='cart-icon' icon={faShoppingCart} size='lg' />
        </Link>

    )
}

export default CartWidgetComponent
