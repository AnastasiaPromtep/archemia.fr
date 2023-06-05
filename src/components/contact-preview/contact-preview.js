import * as React from 'react';
import {Link} from "gatsby";

import {
    container,
    contactContainer,
    textContainer
} from './contact-preview.module.css';

import Footer from "../footer/footer";

const ContactPreview = () => {
    return (
        <main className={ container }>
            <div className={ contactContainer }>
                <div className={ textContainer }>
                    <h1>Un projet ? Parlons-nous !</h1>
                    <h2>Etablissons ensemble les composants de votre formule</h2>
                    <button><Link to='/contact'>Contact</Link></button>
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
}

export default ContactPreview;