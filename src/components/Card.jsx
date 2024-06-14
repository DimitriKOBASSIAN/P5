import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/logements.json";
import "../styles/Card.scss";

/* creating a function to display 6 card at loading. the usestate is initiated at 6, and we add 6 to it to allow display of more card if clicking on the button linked to showmorecards function */
const Card = () => {
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
                </> 
        </section>
        <section >
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
        </section>
        </>
    );
};

export default Card;