import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {

    const { img, name, seller, price, stock } = props.product;

    return (
        <div class="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 class="product-name">{name}</h4>
                <br />
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock</small></p>
                <button class="main-button"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;