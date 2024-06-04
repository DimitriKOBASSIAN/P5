//rating range is 1 to 5
import star from "../assets/icons/star-solid.svg";
import "../styles/Rating.scss";

const range = [1, 2, 3, 4, 5]

function Rating({ rating }) {
    const roundedRating = Math.round(rating);
    return (
        <div className="rating">
        {range.map((el) =>
            roundedRating >= el ? (
            <img className="star--active" key={el.toString()} src={star} alt="note" />
            ) : (
            <img className="star--inactive" key={el.toString()} src={star} alt="note" />
            )
        )}
        </div>
    )
}

export default Rating