import React from 'react'
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const StarRating = (rating) => {

    const {rate, count} = rating.data

    const [star, setStar] = useState(rate);

    const handleRating = (newRate) => {
        setStar(rate + newRate);

    }

    return (
        <div className="star-rating">
            <Rating
                allowFraction
                size={20}
                onClick={handleRating}
                initialValue={star}
            />
            <small className='text-secondary'>({count})</small>
        </div>
    )
}

export default StarRating;