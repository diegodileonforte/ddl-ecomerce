import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (productId, productAmount) => {
        
        if (isInCart(productId)) { console.log("Ya está en el carrito") }
        else {
            setCart([...cart, { item: productId, quantity: productAmount }])
        }
    }

    const removeItem = (itemId) => {
        const newCart = cart.filter(product => product.id !== itemId)
        setCart(newCart)
    }

    const isInCart = (id) => {
        if (cart.findIndex(product => product.id === id) !== -1) {
            return true
        } else {
            return false
        }
    }

    const clearCart = () => {
        setCart([])
    }

    return <CartContext.Provider value={{ cart, setCart, clearCart, addItem, removeItem }}>
        {children}
    </CartContext.Provider>
}

