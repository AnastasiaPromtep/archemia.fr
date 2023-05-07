import * as React from "react";
import {
    container,
    video,
    videoContainer,
    textContainer,
    subtitle
} from "./hero.module.css"
import heroVideo from "../../videos/hero-video.mp4"
import '../../pages/index.scss';

const Hero = () => {
    return (
        <main className={container}>
            <div className={videoContainer}>
                <video autoPlay muted loop className={video}>
                    <source src={heroVideo} type="video/mp4"/>
                </video>
            </div>
            <div className={textContainer}>
                <p className={subtitle}>
                    Une équipe qui vous aide à monter votre stratégie de communication et à créer vos contenus,
                    sans intermédiaire, en combinant vos besoins et vos envies. L’alchimie parfaite.
                </p>
            </div>
        </main>
    )
}

export default Hero
