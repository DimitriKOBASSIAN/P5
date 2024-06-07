import { useState } from "react";
import "../styles/CollapseBar.scss";
import { ReactComponent as ChevronDown } from '../assets/icons/chevron-down-solid.svg';

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
                        <h2>
                            {item.title}
                            <span style={{ display: 'inline-block', width: '24px', height: '24px' }}>
                                {activeIndices.includes(index) ? (
                                    <ChevronDown className="chevron " />
                                ) : (
                                    <ChevronDown className="chevron rotate" />
                                )}
                            </span>
                        </h2>
                    </div>
                        <div className={`collapse-bar__item__content ${activeIndices.includes(index) ? 'expanded' : ''}`}>
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Collapsebar;