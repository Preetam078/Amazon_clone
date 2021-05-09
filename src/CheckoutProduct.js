import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

     const removeFromBasket =() => {
         //remove from the basket
         dispatch({
             type:"Remove from Cart",
             id:id,
         })
     }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title"><strong>{title}</strong></p>
                <p className="checkoutProduct__price"><small>₹</small><strong>{price}</strong></p>
                <div className="product_rating">
                    {Array(rating).fill().map((_,i) =>(
                            <p>⭐</p>
                     ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
