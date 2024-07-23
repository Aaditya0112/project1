import { useContext } from 'react';

import "./productCard.css";
import { ShopContext } from '../context/shop-context';
// const item = {product};
function Card(props){
    const {id,name, price, image} = props.Data;
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemsAmount = cartItems[id];

    return(
        <div className='item'>
            <img src = {image} height = '100px'></img>
            <h2>{name}</h2>
            <p>Price : {price}</p>
            <button onClick= {() => addToCart(id)}> Add To cart</button>
        </div>
    );
}

export default Card;