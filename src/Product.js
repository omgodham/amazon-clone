import React from 'react'
import "./Product.css"
function Product({id,title,price,rating,image}) {
    return (
        <div className="product">
        <div className="product__info">
            <p className="product__title">
            {title}
            </p>
            <span className="product__price">${price}</span>
            <span>🌟</span>
            </div>
            <img className="product__image" src={image} />
            <button className="product__btn">Add To Basket</button>
        </div>
    )
}

export default Product
