import { useState } from "react";
import "../styles/CollapseBar.scss";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function Collapsebar({ list }) {
    const [activeIndices, setActiveIndices] = useState([]);

    const handleClick = (index) => {
        if (activeIndices.includes(index)) {
        setActiveIndices(activeIndices.filter((i) => i !== index));
        } else {
        setActiveIndices([...activeIndices, index]);
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
                <h2>{item.title}<span>{activeIndices.includes(index) ? <FaChevronDown /> : <FaChevronUp />}</span></h2>
            </div>
            {activeIndices.includes(index) && (
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