import * as React from "react";
import { container, navigationLink, link, title, activeContainer } from "./navigation.module.css";
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
        <main className={ isNavBarTransparent ? container : activeContainer }>
            <h1 className={ title }>
                <Link to='/'>
                    <StaticImage src={'../../images/logo.png'} alt="Logo" width={50}/>
                </Link>
            </h1>
            <nav className={ navigationLink }>
                <a className={ link } href="#">Projets</a>
                <Link to='/blog' className={ link }>Blog</Link>
                <Link to='/about' className={ link }>Qui sommes-nous ?</Link>
            </nav>
        </main>
    )
}

export default Navigation
