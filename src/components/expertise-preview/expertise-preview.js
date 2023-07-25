import * as React from 'react';
import {useEffect, useRef, useState} from "react";

import {
    faPen,
    faVideo,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

import {
    container,
    textContainer,
    edition,
    video,
    web,
    active
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
        default:
            return '';
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
        default:
            return '';
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
        default:
            return '';
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
        default:
            return ''
    }
}

const ExpertisePreview = () => {
    const editionContainerRef = useRef(null);
    const videoContainerRef = useRef(null);
    const webContainerRef = useRef(null);
    const [expertise, setExpertise] = useState('');

    const callback = (entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.5) {
                setExpertise(entry.target.id);
            }
        });
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(editionContainerRef.current);
        observer.observe(videoContainerRef.current);
        observer.observe(webContainerRef.current);

        return () => {
            observer.unobserve(editionContainerRef.current);
            observer.unobserve(videoContainerRef.current);
            observer.unobserve(webContainerRef.current);
        }
    }, [editionContainerRef, videoContainerRef, webContainerRef, callback, expertise]);

    return (
        <main className={ `${container} ${getExpertiseStyle(expertise)}` }>
            <div id="edition" ref={editionContainerRef}>
                <div className={`${textContainer} ${expertise === 'edition' ? active : ''}`}>
                    <h1>
                        <FontAwesomeIcon icon={getExpertiseIcon('edition')} />
                        {getExpertiseTitle('edition')}
                    </h1>
                    <p>
                        {getExpertiseText('edition')}
                    </p>
                </div>
            </div>
            <div id="video" ref={videoContainerRef}>
                <div className={`${textContainer} ${expertise === 'video' ? active : ''}`}>
                    <h1>
                        <FontAwesomeIcon icon={getExpertiseIcon('video')} />
                        {getExpertiseTitle('video')}
                    </h1>
                    <p>
                        {getExpertiseText('video')}
                    </p>
                </div>
            </div>
            <div id="web" ref={webContainerRef}>
                <div className={`${textContainer} ${expertise === 'web' ? active : ''}`}>
                    <h1>
                        <FontAwesomeIcon icon={getExpertiseIcon('web')} />
                        {getExpertiseTitle('web')}
                    </h1>
                    <p>
                        {getExpertiseText('web')}
                    </p>
                </div>
            </div>
        </main>
    );
}

export default ExpertisePreview;