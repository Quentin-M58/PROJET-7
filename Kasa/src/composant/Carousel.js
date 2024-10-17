import React from 'react'
import { useState } from "react";
import arrow from "../image/arrow.png"

export default function Carousel({ slides }) {
        const [current, setCurrent] = useState(0); /*je définis l'index du premier slide à 0*/
        const length = slides.length; /* longueur du tableau de slides*/

        const nextSlide = () => {
                setCurrent(current === length - 1 ? 0 : current + 1); /* on repart au premier slide quand on arrive au dernier*/
        };
        const prevSlide = () => {
                setCurrent(current === 0 ? length - 1 : current - 1); /* on repart au dernier slide quand on est au premier*/
        };

        return (
                <section id="carrousel-container">
                                {/*si il existe que plus de 1 image affiche arrow*/}
                                {length > 1 && (
                                <div className="arrow">
                                        <img
                                                src={arrow}
                                                className="leftArrow"
                                                alt="gauche"
                                                onClick={prevSlide}>
                                        </img>
                                        <img
                                                src={arrow}
                                                className="rightArrow"
                                                alt="droite"
                                                onClick={nextSlide}>
                                        </img>
                                </div>
                                )}
                        <div className={"slider"}>
                                <img src={slides[current]} alt="appartement à louer" />
                                {length > 1 && (
                                        <span className="slider__number" >{current + 1}/{length}</span>
                                )}{/*pour afficher la position actuelle sur le nombre image*/}
                        </div>
                </section>
        )
}