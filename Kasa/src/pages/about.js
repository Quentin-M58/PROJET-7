import React from "react";
import Header from "../composant/header"
import Footer from "../composant/footer"
import Imga from "../image/Image source 2.png"
import infos from "../data/info.json"
import Collapse from "../composant/Collapse.js"
import Image from "../composant/image.js"

const About = () => {
        return (
                <div className="about">
                        <Header />
                        <main>
                                <Image
                                        imgtitle={Imga}
                                        description={"image about"}
                                        content={""}
                                />
                                <section className="info">
                                        {infos.map((info) => {
                                                return (
                                                        <Collapse
                                                                title={info.title}
                                                                content={info.description}
                                                                key={info.title}
                                                        />
                                                );
                                        })}
                                </section>
                        </main>
                        <Footer />
                </div>
        );
};

export default About;