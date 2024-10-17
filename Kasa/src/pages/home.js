import React from "react";
import Header from "../composant/header"
import Footer from "../composant/footer"
import Imga from "../image/Image source 1.png"
import Image from "../composant/image.js"
import Cards from "../composant/cards.js"
import Chambres from "../data/gallery.json"

const Home = () => {
        return (
                <div className="home">
                        <Header />
                        <main>
                                <Image
                                        imgtitle={Imga}
                                        description={"image acceuil"}
                                        content={"Chez vous, partout et ailleurs"}
                                />
                                <section className="gallery">
                                        {Chambres.map((Chambre) => {
                                                return (
                                                        <Cards
                                                                title={Chambre.title}
                                                                key={Chambre.id}
                                                                image={Chambre.cover}
                                                                id={Chambre.id}
                                                        />
                                                );
                                        })}
                                </section>
                        </main>
                        <Footer />
                </div>
        );
};

export default Home;