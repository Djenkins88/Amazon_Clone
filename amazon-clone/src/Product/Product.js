import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import "./Product.css"


function Product({ id, title, image, price }) {
    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        setRating(rate)
    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    <Rating onClick={handleRating} ratingValue={rating} />
                    {/* {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>*</p>
                        ))
                    } */}
                </div>
            </div>
            <img src={image} alt="" />
            <button>Add to basket</button>
        </div>
    )
}

export default Product