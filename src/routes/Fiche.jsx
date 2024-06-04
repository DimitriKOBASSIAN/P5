import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import HouseData from "../data/logements.json";

const Fiche = () => {
    const [logement, setLogement] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const foundLogement = HouseData.find(logement => logement.id == id);
        setLogement(foundLogement);
        setLoading(false);
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
        {logement ? (
            <div key={logement.id}>
                <img src={logement.cover} alt={logement.title} />
                <h2>{logement.title}</h2>
                <p>{logement.location}</p>
                <p>{logement.description}</p>
                <img src={logement.host.picture} alt={logement.host.name} />
                <p>{logement.host.name}</p>
                <p>{logement.rating}</p>
                
            </div>
        ) : (
            <p>Logement non trouvé</p>
        )}
    </>
    );
};

export default Fiche;