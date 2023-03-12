import * as React from "react";
import { container, exampleContainer, example, exampleText } from "./presentation.module.css"

const Presentation = () => {
    return (
        <main className={ container }>
            <h1>Nous façonnons votre contenu</h1>
            <div className={ exampleContainer}>
                <div className={ example }>
                    <h2>Rédaction de contenu</h2>
                    <p className={ exampleText }>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est.
                    </p>
                </div>
                <div className={ example }>
                    <h2>Capture d'image</h2>
                    <p className={ exampleText }>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est.
                    </p>
                </div>
                <div className={ example }>
                    <h2>Montage vidéo</h2>
                    <p className={ exampleText }>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est.
                    </p>
                </div>
                <div className={ example }>
                    <h2>Création de site web</h2>
                    <p className={ exampleText }>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Presentation;