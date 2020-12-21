import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value)=>(
                    <>
                    <p>
                        Subtotal (0 item):<span>$0</span>
                    </p>
                    <small>
                    <input className="input__checkbox" type="checkbox" />This order contains a gift</small>
                   </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
