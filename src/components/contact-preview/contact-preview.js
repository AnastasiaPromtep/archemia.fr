import * as React from 'react';
import {useState} from "react";

import {
    container,
    contactContainer,
    textContainer,
    formContainer
} from './contact-preview.module.css';

import Footer from "../footer/footer";

const ContactPreview = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: connect to backend functions
        console.log(inputs);
    }

    return (
        <main className={ container }>
            <div className={ contactContainer }>
                <div className={ textContainer }>
                    <h1>Un projet ? Parlons-nous !</h1>
                    <h2>Etablissons ensemble les composants de votre formule</h2>
                    <button>Contact</button>
                </div>
                <div className={ formContainer }>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Prénom :
                            <input
                                type='text'
                                name='firstname'
                                value={inputs.firstname || ""}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Nom :
                            <input
                                type='text'
                                name='lastname'
                                value={inputs.lastname || ""}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Téléphone :
                            <input
                                type='tel'
                                name='telephone'
                                value={inputs.telephone || ""}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Email :
                            <input
                                type='email'
                                name='email'
                                value={inputs.email || ""}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Message :
                            <input
                                type='text'
                                name='message'
                                value={inputs.message || ""}
                                onChange={handleChange}
                            />
                        </label>
                        <button type='submit'>Envoyer</button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
}

export default ContactPreview;