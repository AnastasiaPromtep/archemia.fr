import * as React from "react";
import { container, navigationLink, link, title } from "./navigation.module.css";
import {Link} from "gatsby";

const Navigation = () => {
    return (
        <main className={ container }>
            <h1 className={ title }>
                <Link to='/'>Archemia</Link>
            </h1>
            <nav className={ navigationLink }>
                <a className={ link } href="#">Galerie</a>
                <a className={ link } href="#">Projets</a>
                <Link to='/blog' className={ link }>Blog</Link>
                <Link to='/about' className={ link }>About</Link>
            </nav>
        </main>
    )
}

export default Navigation
