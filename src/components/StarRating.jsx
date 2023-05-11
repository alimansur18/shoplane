import React from 'react'
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const StarRating = (rating) => {

    const ratingData = rating.data

    return (
        <>
            {ratingData && (
                <div className="star-rating">
                    <Rating
                        allowFraction
                        size={20}
                        initialValue={ratingData.rate}
                    />
                    <small className='text-secondary'>({ratingData.count})</small>
                </div>
            )}
        </>
    )
}

export default StarRating;