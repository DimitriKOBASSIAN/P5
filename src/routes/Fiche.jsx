import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import HouseData from "../data/logements.json";
import Collapsebar from "../components/CollapseBar";
import "../styles/Fiche.scss";
import Rating from "../components/Rating";

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
            <div key={logement.id} className="fiche">
                <img src={logement.cover} alt={logement.title} className="fiche--carrousel"/>
                <h2 className="fiche--title">{logement.title}</h2>
                <p className="fiche--location">{logement.location}</p>
                <p>{logement.description}</p>
                <img src={logement.host.picture} alt={logement.host.name} className="fiche--host-photo" />
                <p className="fiche--hostname">{logement.host.name}</p>
                <Rating rating={logement.rating / 5} />
                
            </div>
        ) : (
            <p>Logement non trouvé</p>
        )}
    </>
    );
};

export default Fiche;