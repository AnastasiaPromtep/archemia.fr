import * as React from 'react';

import {
    faPen,
    faVideo,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

import {
    container,
    textContainer,
    logoContainer,
    edition,
    video,
    web
} from './expertise-preview.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const getExpertiseStyle = (expertise) => {
    switch (expertise) {
        case 'edition':
            return edition;
        case 'video':
            return video;
        case 'web':
            return web;
    }
}

const getExpertiseIcon = (expertise) => {
    switch (expertise) {
        case 'edition':
            return faPen;
        case 'video':
            return faVideo;
        case 'web':
            return faGlobe;
    }
}

const getExpertiseTitle = (expertise) => {
    switch (expertise) {
        case 'edition':
            return 'Rédaction';
        case 'video':
            return 'Réalisation';
        case 'web':
            return 'Développement web';
    }
}

const getExpertiseText = (expertise) => {
    switch (expertise) {
        case 'edition':
            return 'Conception et rédaction de tous vos contenus éditoriaux : articles, livres blancs, infographies, ' +
                'posts réseaux sociaux, etc. Nous nous adaptons à votre secteur d’activité et à votre audience pour ' +
                'répondre à vos besoins, sur tous vos canaux.';
        case 'video':
            return 'Pré-production, production, post-production, on s’occupe de tout. Publicités, interviews, ' +
                'reportages, podcasts, plan drones : nous avons un format qui répond à vos besoins et votre budget. ' +
                'Optez pour des images au service de vos histoires.';
        case 'web':
            return 'Besoin d’une refonte graphique, d’ajouter des fonctionnalités à votre site ou simplement d’en créer ' +
                'un nouveau ? Nous utilisons les dernières technologies et tendances design pour vous aider à reprendre ' +
                'ou à créer votre site web.';
    }
}

const ExpertisePreview = ( props ) => {
    return (
        <main className={ `${container} ${getExpertiseStyle(props.expertise)}` }>
            <div className={ logoContainer }>
                <span>
                    <FontAwesomeIcon icon={getExpertiseIcon(props.expertise)} />
                </span>
            </div>
            <div className={ textContainer }>
                <h1>{getExpertiseTitle(props.expertise)}</h1>
                <p>
                    {getExpertiseText(props.expertise)}
                </p>
            </div>
        </main>
    );
};

export default ExpertisePreview;