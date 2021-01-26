import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidgetComponent = () => {
    return (
        <>
            <a href="#">
                <FontAwesomeIcon id="cart-icon" icon={faShoppingCart} size="lg" />
            </a>
        </>
    )
}

export default CartWidgetComponent