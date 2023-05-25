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
            <h1>L'équipe</h1>
            <div className={ profileContainer }>
                <div className={ `${profile} ${web}` }>
                    <BackgroundPainting />
                    <StaticImage src={'../../images/anastasia.JPEG'} alt={'ana image'} />
                    <h1>Anastasia</h1>
                    <h2>Prom tep</h2>
                </div>
                <div className={ `${profile} ${edition}` }>
                    <BackgroundPainting />
                    <StaticImage src={'../../images/calvin.JPEG'} alt={'calvin image'} />
                    <h1>Calvin</h1>
                    <h2>Ropers</h2>
                </div>
                <div className={ `${profile} ${video}` }>
                    <BackgroundPainting />
                    <StaticImage src={'../../images/thomas.JPEG'} alt={'thomas image'} />
                    <h1>Thomas</h1>
                    <h2>Ribier</h2>
                </div>
            </div>
        </main>
    );
};

export default TeamPreview;
