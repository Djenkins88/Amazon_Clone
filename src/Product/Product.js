import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import "./Product.css"
import {useStateValue } from '../StateProvider';



function Product({ id, title, image, price }) {
    const [{}, dispath] = useStateValue();

    const addToBasket = () => {
        // Add item to basket()
        dispath({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            }
        })
    }
    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        setRating(rate)
    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$ </small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    <Rating onClick={handleRating} ratingValue={rating} />
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product