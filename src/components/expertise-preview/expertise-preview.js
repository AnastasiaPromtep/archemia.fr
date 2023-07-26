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
            observer.disconnect();
        }
    }, [editionContainerRef, videoContainerRef, webContainerRef, callback, expertise]);

    const openEditionModal = () => {
        const modal = document.querySelector("#editionModal");
        modal.showModal();
    }

    const closeEditionModal = () => {
        const modal = document.querySelector("#editionModal");
        modal.close();
    }

    const openVideoModal = () => {
        const modal = document.querySelector("#videoModal");
        modal.showModal();
    }

    const closeVideoModal = () => {
        const modal = document.querySelector("#videoModal");
        modal.close();
    }

    const openWebModal = () => {
        const modal = document.querySelector("#webModal");
        modal.showModal();
    }

    const closeWebModal = () => {
        const modal = document.querySelector("#webModal");
        modal.close();
    }

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
                    <button onClick={openEditionModal}>En savoir plus</button>
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
                    <button onClick={openVideoModal}>En savoir plus</button>
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
                    <button onClick={openWebModal}>En savoir plus</button>
                </div>
            </div>

            <dialog id="editionModal">
                <h1>Les enjeux marketing de l’édito</h1>
                <p>
                    La communication commence bien souvent par des mots. Posts réseaux sociaux, articles et livres blancs
                    sont autant de formats possibles pour vous exprimer. Mais comment (bien) les choisir et les créer ?
                    Quels sont les canaux à privilégier ? Il n’y a pas de méthode miracle pour concevoir la meilleure
                    campagne marketing, seulement la bonne formule à trouver entre tous vos éléments.
                </p>

                <h2>Taux de conversion</h2>
                <p>
                    Peu importe votre secteur d’activité ou la taille de votre entreprise, vous avez besoin de créer du
                    contenu pour communiquer autour de votre marque. Votre enjeu : limiter vos coûts et maximiser vos
                    performances. Le problème ? Tonalité, territoire d’expression, personas, taux de conversion,
                    canaux de communication et call to action sont autant de notions vagues ou étrangères pour vous.
                    Ou peut-être que votre équipe marketing est tout simplement débordée. Et c’est là que nous intervenons.
                    Nous créons tous les formats éditoriaux pour convertir vos prospects en clients.
                </p>

                <h2>Notoriété</h2>
                <p>
                    Mais le marketing ne se limite pas à votre taux de conversion. Si vous créez des contenus, c’est aussi
                    pour faire rayonner votre marque et vous distinguer de vos concurrents. Parce que produire un contenu
                    de qualité augmentera votre notoriété, faites appel à des experts.
                </p>

                <h2>On s’occupe de tout</h2>
                <p>
                    Chez Archemia, nous vous accompagnons à travers vos campagnes marketing : de l’idéation à la diffusion
                    de vos contenus. Nous organisons des workshops avec vos équipes, nous rédigeons les contenus dans tous
                    les formats possibles et nous les mettons en forme. Nous optimisons le SEO autant que le design.
                    Entre vous et nous, tous les ingrédients sont là pour créer l’alchimie parfaite.
                </p>

                <button onClick={closeEditionModal}>Close</button>
            </dialog>
            <dialog id="videoModal">
                <h1>Le visage et la voix d’une marque</h1>
                <p>
                    Référencement et image de marque, deux piliers du marketing qui font de la production audiovisuelle
                    un indispensable pour votre entreprise. Vidéos ou podcasts, images ou sound design, c’est le visage
                    et la voix de votre entreprise qui sont en jeu. Alors comment (bien) produire ces contenus ?
                </p>

                <h2>Des besoins et des formats</h2>
                <p>
                    Quel que soit votre besoin, notoriété ou conversion, il y a quelque part un format qui vous correspond.
                    Et non seulement nous pouvons vous aider à le trouver, mais nous pouvons aussi le produire pour vous.
                    <ul>
                        <li>Interview</li>
                        <li>Reportage</li>
                        <li>After movie</li>
                        <li>Documentaire</li>
                        <li>Publicité</li>
                    </ul>
                    Autant de formats déclinables en vidéos ou en podcasts, selon vos besoins et votre budget.
                    Nous vous aidons à trouver ce qui vous correspond, et ensuite nous le réalisons pour vous.
                </p>

                <h2>Prendre de la hauteur</h2>
                <p>
                    Envie de donner un souffle épique à vos vidéos ? Alors prenez de la hauteur grâce au drone qualité
                    cinéma. Nous nous occupons de toutes les formalités administratives pour faire passer vos vidéos à la vitesse supérieure.
                </p>

                <h2>Sound design</h2>
                <p>
                    La production de podcast se multiplie mais la qualité du son n’est pas toujours au rendez-vous.
                    Chez Archemia, nous travaillons directement avec des ingénieurs du son et des compositeurs pour
                    créer un sound design unique à votre podcast.
                </p>

                <h2>Laissez-nous raconter votre histoire</h2>
                <p>
                    Pré-production, production, post-production, chez Archemia, nous nous occupons de tout.
                    Nous sommes à votre écoute pour vous aider à trouver le meilleur format et les meilleures idées,
                    puis nous produisons les contenus en interne et en autonomie. Pas d’intermédiaire, pas de chichi.
                    C’est ça l’alchimie.
                </p>

                <button onClick={closeVideoModal}>Close</button>
            </dialog>
            <dialog id="webModal">
                <h1>Infrastructure et superstructure</h1>
                <p>
                    Vitrine, blog ou boutique en ligne, votre site web est le réacteur de votre entreprise.
                    Son design et son ergonomie sont le reflet de votre marque. Épurée, accessible, ou au contraire
                    riche et technique : il n’y a pas de bonne réponse, seulement un positionnement à choisir.
                    Et nous sommes là pour vous aider.
                </p>

                <h2>UX/UI design</h2>
                <p>
                    À partir d’un benchmark et d’une analyse des grandes tendances de votre secteur d’activité,
                    nous vous fournissons des recommandations sur-mesure pour le design UX/UI de votre site.
                    Qu’il s’agisse d’une refonte ou d’une création, nous faisons intervenir nos graphistes
                    et nos développeurs à votre service.
                </p>

                <h2>Site web, application mobile ou logiciel</h2>
                <p>
                    Peu importe votre infrastructure, nous nous adaptons à vos besoins. Que vous souhaitiez monter un
                    site web, une application mobile ou un logiciel en SaaS, nous avons les outils pour vous aider.
                    Notre mission : transformer vos besoins métiers en solutions techniques.

                </p>

                <button onClick={closeWebModal}>Close</button>
            </dialog>
        </main>
    );
}

export default ExpertisePreview;