import React, { useState } from 'react';
import '../styles/Carousel.scss';
import { ReactComponent as ChevronLeft } from '../assets/icons/chevron-left-solid.svg';
import { ReactComponent as ChevronRight } from '../assets/icons/chevron-right-solid.svg';

const Carousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    return (
        <div className="carousel">
            <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
                <ChevronLeft className="chevron-carousel" />
            </button>
            <img
                src={images[activeIndex]}
                alt={`Slide ${activeIndex}`}
                className="carousel__img"
            />
            <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
                <ChevronRight className="chevron-carousel" />
            </button>
        </div>
    );
};
export default Carousel;