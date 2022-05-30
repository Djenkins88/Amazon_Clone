import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { useStateValue } from '../StateProvider'
import './CheckoutProduct.css'

function CheckoutProduct({ id, title, image, price}) {
  const [rating, setRating] = useState(0)

  const handleRating = (rate) => {
      setRating(rate)
  }
  const [{ }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    })
  }


  return (
    <div className='checkoutProduct'>
      <img className ="checkoutProduct__image" src={image} alt="pictue of products"/>

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>

        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className='checkoutProduct__rating'>
          <Rating onClick={handleRating} ratingValue={rating} />
        </div>

        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>

  )
}

export default CheckoutProduct