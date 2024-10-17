import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../composant/header"
import Footer from "../composant/footer"

const Home = () => {
        return (
                <div className="home">
                        <Header />
                        <main>
                                <section className="error">
                                        <p className="nberror">404</p>
                                        <p className="texterror">Oups! La page que vous demandez n'existe pas.</p>
                                        <NavLink to="/accueil">
                                                Retourner sur la page d’accueil
                                        </NavLink>
                                </section>
                        </main>
                        <Footer />
                </div>
                 );
};

export default Home;