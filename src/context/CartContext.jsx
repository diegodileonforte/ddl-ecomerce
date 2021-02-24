import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (product, productAmount) => {
        
        if (isInCart(product.id)) {

            console.log("Ya está en el carrito")
        }
        else {
            setCart([...cart, { item: product, quantity: productAmount }])
        }
    }

    const isInCart = (id) => {
        if (cart.findIndex(product => product.item.id === id) !== -1) {
            return true
        } else {
            return false
        }
    }

    const removeItem = (itemId) => {
        const newCart = cart.filter(product => product.id !== itemId)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    return <CartContext.Provider value={{ cart, setCart, clearCart, addItem, removeItem }}>
        {children}
    </CartContext.Provider>
}

