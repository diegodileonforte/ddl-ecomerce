import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        if (localStorage.getItem('cart') !== null) {
            setCart(JSON.parse(localStorage.getItem('cart')))
        }
    }, [])

    const addItem = (product, productAmount) => {

        if (isInCart(product.id)) {

            const i = cart.findIndex(prod => prod.item.id === product.id)
            const cartCopy = cart.slice()
            const newQ = () => {
                const sum = cartCopy[i].quantity + productAmount
                cartCopy[i].quantity = sum
                setCart(cartCopy)
                localStorage.setItem('cart', JSON.stringify(cartCopy))                
            }
            newQ()
        }
        else {
            setCart([...cart, { item: product, quantity: productAmount }])
            localStorage.setItem('cart', JSON.stringify([...cart, { item: product, quantity: productAmount }]))
        }
    }

    const isInCart = (id) => {

        const checkProduct = cart.some(product => product.item.id === id)
        return checkProduct
    }

    const removeItem = (itemId) => {
        const newCart = cart.filter(product => product.item.id !== itemId)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
        localStorage.clear()
    }

    const cartBadge = () => {

        let qArray = cart.map((item) => { return item.quantity })
        let sum = qArray.reduce((acc, q) => acc + q, 0)
        return sum
    }

    const itemPrice = (product) => {
        const price = product.item.price * product.quantity
        return price
    }

    const totalPrice = () => {
        let indPrice = cart.map((item) => { return item.item.price * item.quantity })
        let sum = indPrice.reduce((acc, q) => acc + q, 0)
        return sum
    }

    return <CartContext.Provider value={{ cart, setCart, clearCart, addItem, removeItem, cartBadge, itemPrice, totalPrice }}>
        {children}
    </CartContext.Provider>
}

