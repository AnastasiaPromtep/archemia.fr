import * as React from "react";
import { container, navigationLink, link, title } from "./navigation.module.css";

const Navigation = () => {
    return (
        <main className={ container }>
            <h1 className={ title }>Archemia</h1>
            <nav className={ navigationLink }>
                <a className={ link } href="#">Galerie</a>
                <a className={ link } href="#">Projets</a>
                <a className={ link } href="#">Blog</a>
                <a className={ link } href="#">Qui sommes nous ?</a>
            </nav>
        </main>
    )
}

export default Navigation
