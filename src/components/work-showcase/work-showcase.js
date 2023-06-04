import * as React from 'react';

import {
    container
} from './work-showcase.module.css';
import {StaticImage} from "gatsby-plugin-image";

const WorkShowcase = () => {
    return (
        <main className={ container }>
            <h1>Nos dernières collab</h1>
            <StaticImage src='../../images/icon.png' alt='Placeholder' />
            <div>
                <h2>Titre de l'image</h2>
                <span>Courte description qui explique </span>
            </div>
        </main>
    );
};

export default WorkShowcase;