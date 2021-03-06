import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({id,title, image, price, rating}) {
    const[{basket}, dispatch]=useStateValue();
      const addToCart=()=>{
          //dispatch the item into data layer
          dispatch({
               type:"ADD TO CART",
               item: {
                   id:id,
                   title:title,
                   image:image,
                   price:price,
                   rating:rating,
               }
          })
      }
    return (
        <div className="product">
            <div className="product_info">
                <p><strong>{title}</strong></p>
                <p className="product_price">
                    <strong>₹</strong>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_,i) =>(
                            <p>⭐</p>
                     ))}
                </div>
             </div>
             <img src={image}/>
             <button onClick={addToCart}>ADD TO CART</button>
        </div>
    )
}

export default Product
