import * as React from "react";
import {
    container,
    video,
    videoContainer,
    textContainer,
} from "./hero.module.css"
import '../../pages/index.scss';

const Hero = () => {
    return (
        <main id='heroSection' className={container}>
            <div className={videoContainer}>
                <video autoPlay muted loop className={video}>
                    <source src='https://archemia-fontend.imgix.net/hero-video.mp4' type="video/mp4"/>
                </video>
                <div className={ textContainer }>
                    <h1>Agence web et créative</h1>
                    <h2>Idées | Contenu | Alchimie</h2>
                </div>
            </div>
        </main>
    )
}

export default Hero
