import { useState } from "react";
import "../styles/CollapseBar.scss";


function Collapsebar({ list }) {
    const [activeIndex, setActiveIndex] = useState(null);
    
    const handleClick = (index) => {
        if (activeIndex === index) {
        setActiveIndex(null);
        } else {
        setActiveIndex(index);
        }
    };
    
    return (
        <div className="collapse-bar">
        {list.map((item, index) => (
            <div key={index} className="collapse-bar__item">
            <div
                className="collapse-bar__item__header"
                onClick={() => handleClick(index)}
            >
                <h2>{item.title}<span>{activeIndex === index ? "-" : "+"}</span></h2>
            </div>
            {activeIndex === index && (
                <div className="collapse-bar__item__content">
                <p>{item.content}</p>
                </div>
            )}
            </div>
        ))}
        </div>
    );
    }

export default Collapsebar;