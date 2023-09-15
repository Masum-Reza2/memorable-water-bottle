const getStoredCart = () => {
    const cartStr = localStorage.getItem('cart');
    if (cartStr) {
        return JSON.parse(cartStr)
    }
    else {
        return []
    }
}

const saveToLS = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

const addToLS = (id) => {
    const cart = getStoredCart();
    cart.push(id)
    saveToLS(cart)
}

const removeFromLS = id => {
    const cart = getStoredCart()
    const remaining = cart.filter(idx => idx !== id)
    saveToLS(remaining)
}

export { addToLS, getStoredCart, saveToLS, removeFromLS }