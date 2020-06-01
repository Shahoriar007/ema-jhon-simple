import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    //Total using reduce ..
    //const total = cart.reduce((total, prd) => total + prd.price, 0);\

    //Total another way..
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 12.99;
    if(total === 0){
        shipping = 0;
    }
    else if(total > 0 && total <= 14){
        shipping = 12.99;
    }
    else if(total >= 15 && total <=35 ){
        shipping = 4.99;
    }
    else{
        shipping = 0;
    }

    let tax = Math.round(total / 10);
     
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length} </p>  
            <p>Product Price: {total}</p>
            <p><small>Shipping Cost: {shipping}</small></p> 
            <p><small>Tax: {tax}</small></p>
            <p>Total Price : {total + shipping + tax}</p>
            <br/>
            <Link to="/review">
                <button className="main-button" >Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;