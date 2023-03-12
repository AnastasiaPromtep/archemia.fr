import {StaticImage} from "gatsby-plugin-image";
import * as React from "react";
import { container, image, title } from "./hero.module.css"

const Hero = () => {
    return (
        <main className={container}>
            <StaticImage className={image} src='../../images/placeholder.svg' alt='Place holder image'/>
            <span className={title}>L'alchimie de votre contenu</span>
        </main>
    )
}

export default Hero