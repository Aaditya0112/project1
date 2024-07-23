import { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import "./productCard.css"

function CartItem(props){
    const{id, name, price, image} = props.Data;

    const{cartItems, addToCart, removeFromCart} = useContext(ShopContext);

    return(
        <div className= {"cartItem"+id}>
            <img src = {image} height = '100px'></img>
            <h2>{name}</h2>
            <button onClick = {() => removeFromCart(id)}>-</button>
            <input type="text" name={"text" + id} id={"qty" + id} value = {cartItems[id]} />
            <button onClick = {() => addToCart(id)}>+</button>
        </div>
    )
}

export default CartItem;