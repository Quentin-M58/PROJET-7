import React from "react";
import logo from "../image/LOGO.svg"
import CustomLink from "./CustomLink.js"

export default function Header() {
        return (
                <header>
                        <img src={logo} alt="logo de Kasa"></img>
                        <nav>
                                <ul>
                                        <li>
                                                <CustomLink to="/accueil">Accueil</CustomLink>
                                        </li>
                                        <li>
                                                <CustomLink to="/about">A Propos</CustomLink>
                                        </li>
                                </ul>
                        </nav>
                </header>
        );
}