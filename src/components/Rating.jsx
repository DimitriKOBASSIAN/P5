import { ReactComponent as Star } from "../assets/icons/star-solid.svg";
import "../styles/Rating.scss";
import React from 'react';

function Rating({ rating }) {
    const stars = Array(5).fill(0);

    return (
        <div className="rating">
        {stars.map((_, index) =>
            rating > index ? (
            <Star className="star--active" key={index} />
            ) : (
            <Star className="star--inactive" key={index} />
            )
        )}
        </div>
    )
}

export default Rating