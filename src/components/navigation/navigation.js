import * as React from "react";
import {
    container,
    navigationLink,
    link,
    active} from "./navigation.module.css";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import {useEffect, useState} from "react";

const Navigation = () => {
    const [isNavBarTransparent, setIsNavBarTransparent] = useState(true);

    const changeBackground = () => {
        const landingPageContainer = document.getElementById('landingPageContainer');

        if (landingPageContainer.scrollTop  === 0) {
            setIsNavBarTransparent(true);
        } else {
            setIsNavBarTransparent(false);
        }
    }

    useEffect(() => {
        const landingPageContainer = document.getElementById('landingPageContainer');

        changeBackground();
        landingPageContainer.addEventListener('scroll', changeBackground);

        return () => {
            landingPageContainer.removeEventListener('scroll', changeBackground);
        }
    });

    return (
        <main className={ isNavBarTransparent ? container : `${container} ${active}` }>
            <nav className={ navigationLink }>
                <a className={ link } href="#">Projets</a>
                <a className={ link }>L'équipe</a>
                <Link className={ link } to='/'><h1>Archemia</h1></Link>
                <Link to='/blog' className={ link }>Blog</Link>
                <Link to='/about' className={ link }>Contact</Link>
            </nav>

        </main>
    )
}

export default Navigation
