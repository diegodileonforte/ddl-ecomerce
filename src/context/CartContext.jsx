import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (product) => {

        setCart(product)
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

    return <CartContext.Provider value={{ cart, setCart, clearCart, addItem, removeItem, isInCart }}>
        {children}
    </CartContext.Provider>
}

