import { useContext, useState} from "react";
import PRODUCTS from "../components/Products";
import { ShopContext } from "../context/shop-context";
import CartItem from "../components/CartItem";

function Cart(){
    const {cartItems, totalAmount} = useContext(ShopContext)
    let amt = 0;
    return(
        <div className="Cart" >
            <h1> CART </h1>
            <div className = "CartItems">
                {PRODUCTS.map((products) => {
                  if(cartItems[products.id] !== 0){
                        amt = totalAmount()    ;
                        
                        return(<CartItem Data = {products}/>)
                    }}
    )}
            </div>


            <div className = "totalAmt">
                    <p>{"sum : " +amt}</p>
            </div>
        </div>
    );
}

export default Cart;