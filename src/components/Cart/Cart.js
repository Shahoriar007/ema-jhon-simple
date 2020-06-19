import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';


const Cart = (props) => {
    const cart = props.cart;
    const user = useContext(UserContext);
    //const total = cart.reduce((total, prd) => total + prd.price, 0);

    //Total another way..
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
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
            {
                props.children
            }
            <p>{user}</p>
        </div>
    );
};

export default Cart;