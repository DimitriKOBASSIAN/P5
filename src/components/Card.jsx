import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../data/logements.json";
import Loader from "./Loader";
import "../styles/Card.scss";

const Card = () => {
    const navigate = useNavigate();
    const [numCardsToShow, setNumCardsToShow] = useState(6);

    const showMoreCards = () => {
        setNumCardsToShow(numCardsToShow + 6);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <section className="container">
            {data ? (
                <>
                {data.slice(0, numCardsToShow).map((data) => (
                    <figure key={data.id} className="container_card">
                        <Link to={`/housing/${data.id}`} className="card">
                            <img
                                src={data.cover}
                                alt={`nom de la location : ${data.title}`}
                                className="card__img"
                            />
                            <figcaption className="card__title">
                                {data.title}
                            </figcaption>
                        </Link>
                    </figure>
                ))}
                {data.length > numCardsToShow && (
                    <div className="container_button">
                        <button
                            value="Afficher plus de contenu"
                            onClick={showMoreCards}
                        >
                            Afficher plus
                        </button>
                    </div>
                )}
                </>
            ) : (
                <Loader />
            )}
        </section>
        </>
    );
};

export default Card;
