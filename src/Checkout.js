import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal"
function Checkout() {
    const [{basket,user}, dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
             <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/LPAIndia/Header/170_AP_1500x300.jpg" />
             <div>
                 <h3>Hello,{user?.email}</h3>
                 <h2 className="chechout__title">Your Shopping Cart</h2>
                {basket.map(item => (
                    <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                    />
                ))}
                 {/**cart item */}
                 {/**cart item */}
                 {/**cart item */}
             </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
