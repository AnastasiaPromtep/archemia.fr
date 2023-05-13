import * as React from 'react';
import { container, textContainer } from './contact.module.css';

const Contact = () => {
    return (
        <main className={ container }>
            <div className={ textContainer }>
                <h1>Un projet ? Parlons-nous !</h1>
                <h2>Etablissons ensemble les composants de formules</h2>
                <button>Contact</button>
            </div>

        </main>
    );
}

export default Contact;