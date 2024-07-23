import { createContext, useState } from "react";
import PRODUCTS from "../components/Products";

 const ShopContext = createContext();

const getDefaultCart = () =>{
    let cart = {};
    for(let  i = 1; i<PRODUCTS.length +1; i++){
        cart[i] = 0;
    }
    return cart;
}

 const ShopContextProvider = (props) => {

    const[cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}));
    }

    const totalAmount = () =>{
        let sum =0;
        PRODUCTS.map((product) =>{
            sum += cartItems[product.id]*(product.price);
        })
        
        return sum;
    }
    

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1}));
    }

    const contextValue = {cartItems, addToCart, removeFromCart, totalAmount};

    // console.log(cartItems);

    return <ShopContext.Provider value = {contextValue}>{props.children}</ShopContext.Provider>
}

export {ShopContext, ShopContextProvider}