import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidgetComponent = () => {
    return (
        <>
            <FontAwesomeIcon id="cart-icon" icon={faShoppingCart} size="lg"/>
        
        </>
    )
}

export default CartWidgetComponent