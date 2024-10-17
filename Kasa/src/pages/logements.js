import React from "react";
import Header from "../composant/header"
import Footer from "../composant/footer"
import { useParams } from "react-router-dom";
import gallery from "../data/gallery.json"
import Collapse from "../composant/Collapse.js"
import Carousel from "../composant/Carousel.js"
import Tag from "../composant/Tag.js"
import Star from "../composant/star.js"

const Logements = () => {
        const { idlogement } = useParams();
        const ficheLogement = gallery.find((info) => info.id === idlogement);
        return (
                <div className="logement">
                        <Header />
                        <main>
                                <Carousel slides={ficheLogement?.pictures} />
                                <div className="info">
                                        <div className="title">
                                                <h1 className="title">{ficheLogement?.title}</h1>
                                                <p className="location">{ficheLogement?.location}</p>
                                        </div>
                                        <div className="host">
                                                <p className="name">{ficheLogement?.host.name}</p>
                                                <div>
                                                        <img src={ficheLogement?.host.picture}></img>
                                                </div>
                                        </div>
                                        <Tag infotag={ficheLogement?.tags} />
                                        <Star valeur={ficheLogement?.rating} />
                                </div>
                                <div className="descequip">
                                        <Collapse title="Description" content={ficheLogement?.description} />
                                        <Collapse title="Equipments" content={ficheLogement?.equipments} />
                                </div>
                        </main>
                        <Footer />
                </div>
        );
};

export default Logements;