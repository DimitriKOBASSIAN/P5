import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HouseData from "../data/logements.json";
import Loader from "../components/Loader";
import CollapseBar from "../components/CollapseBar";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Error from "../routes/Error";    
import "../styles/Fiche.scss";


const Fiche = () => {
    const [logement, setLogement] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const foundLogement = HouseData.find(logement => logement.id === id);
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
                <Carousel className="fiche--carousel" images={logement.pictures} />
                <div className="fiche--header">
                    <div className="fiche--geo">
                    <h2 className="fiche--title">{logement.title}</h2>
                    <p className="fiche--location">{logement.location}</p>
                    </div>
                    <div className="fiche--host">
                        <img src={logement.host.picture} alt={logement.host.name} className="fiche--host-photo" />
                        <p className="fiche--hostname">{logement.host.name.split(' ')[0]}<br />{logement.host.name?.split(' ')[1]}</p>
                    </div>
                            <div className="fiche--tags">
                                {logement.tags.map((tag, index) => (
                                <span key={index} className="fiche--tag">{tag}</span>
                                ))}
                            </div>
                            <div className="fiche--rate">
                                <Rating rating={logement.rating} />
                            </div>
                </div>
                <div className="fiche--infos">
                <CollapseBar className="fiche--description" list={[{ title: 'Description', content: logement.description }]} />
                <CollapseBar 
                    className="fiche--equipements" 
                    list={[
                        { 
                            title: 'Equipements', 
                            content: (
                                <ul>
                                    {logement.equipments.map((equipment, index) => (
                                        <li key={index}>{equipment}</li>
                                    ))}
                                </ul>
                            ) 
                        }
                    ]} 
                />
                </div>
            </div>
        ) : (
            <Error />
        )}
        </>
    );
};

export default Fiche;