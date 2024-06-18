import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/logements.json";
import "../styles/Card.scss";

const Card = () => {
    const [numCardsToShow, setNumCardsToShow] = useState(6);

    const showMoreCards = () => {
        setNumCardsToShow((prevNumCardsToShow) => prevNumCardsToShow + 6);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="container">
                {data.slice(0, numCardsToShow).map((logement) => (
                    <figure key={logement.id} className="container_card">
                        <Link to={`/housing/${logement.id}`} className="card">
                            <img
                                src={logement.cover}
                                alt={`nom de la location : ${logement.title}`}
                                className="card__img"
                            />
                            <figcaption className="card__title">
                                {logement.title}
                            </figcaption>
                        </Link>
                    </figure>
                ))}
            </section>
            <section>
                {data.length > numCardsToShow && (
                    <div className="container_button">
                        <button onClick={showMoreCards}>
                            Afficher plus
                        </button>
                    </div>
                )}
            </section>
        </>
    );
};

export default Card;