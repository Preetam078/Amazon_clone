import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getBasaketTotal } from './reducer';
function Subtotal() {
    const[{basket}, dispatch]=useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
               renderText={(value)=>(
                  <> <p>
                      Subtotal({basket.length} items):<strong>{value}</strong></p>
                      <small className="subtotal__gift">
                          <input type="checkbox"/>This order contains a gift
                          </small> </>
               )}
               decimalScale={0}
               value={getBasaketTotal(basket)}
               displayType={"text"}
               thousandSeperator={true}
               prefix={"₹"}
            />
            <button className="subtotal__button">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
