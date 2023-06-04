import * as React from 'react';
import {
    container,
    profileContainer,
    profile,
    video,
    edition,
    web
} from './team-preview.module.css';
import {StaticImage} from "gatsby-plugin-image";
import BackgroundPainting from '../../images/background-paintings.svg';


const TeamPreview = () => {
    return (
        <main className={ container }>
            <h1>Nos 3 pôles</h1>
            <div className={ profileContainer }>
                <div className={ `${profile} ${web}` }>
                    <BackgroundPainting />
                    <StaticImage src={'../../images/anastasia.JPEG'} alt={'ana image'} />
                    <div>
                        <h1>Anastasia</h1>
                        <h2>PROM TEP</h2>
                        <span>Directrice technique</span>
                    </div>
                </div>
                <div className={ `${profile} ${edition}` }>
                    <BackgroundPainting />
                    <StaticImage src={'../../images/calvin.JPEG'} alt={'calvin image'} />
                    <div>
                        <h1>Calvin</h1>
                        <h2>ROPERS</h2>
                        <span>Directeur éditorial</span>
                    </div>
                </div>
                <div className={ `${profile} ${video}` }>
                    <BackgroundPainting />
                    <StaticImage src={'../../images/thomas.JPEG'} alt={'thomas image'} />
                    <div>
                        <h1>Thomas</h1>
                        <h2>RIBIER</h2>
                        <span>Directeur audiovisuelle</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TeamPreview;
