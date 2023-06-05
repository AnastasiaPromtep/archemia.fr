import * as React from 'react'
import {useState} from "react";
import {formContainer} from "../components/contact-preview/contact-preview.module.css";

const ContactPage = () => {
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
        <main>
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
        </main>
    )
}

export default ContactPage