import React from 'react'
import Emptystar from "../image/empty-star-solid.png"
import Fullstar from "../image/full-star-solid.png"

export default function Star({ valeur }) {
        const totalStar = 5
        const starNumber = parseInt(valeur)
        const emptyStarNumber = totalStar - starNumber
        const fullStarNumber = totalStar - emptyStarNumber
        return (
                <div className="stars">
                        {[...Array(fullStarNumber)].map((e, i) =>
                                <img
                                        className="fullstar"
                                        key={i}
                                        src={Fullstar}
                                        alt={"Full Star Rating " + i}
                                />
                        )}
                        {[...Array(emptyStarNumber)].map((e, i) =>
                                <img
                                        className="star"
                                        key={i}
                                        src={Emptystar}
                                        alt={'Empty Star Rating ' + i}
                                />
                        )}
                </div>
        )
}