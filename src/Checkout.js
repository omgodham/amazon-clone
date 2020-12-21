import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"
function Checkout() {
    return (
        <div className="checkout">
           <div className="left__container">
           <img className="checkout__ad" 
           src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
           <h3>Hello,</h3>
           <h2>Your Shopping Basket</h2>
           </div>
           <div className="right__container">
           <Subtotal />
           </div>
        </div>
    )
}

export default Checkout
