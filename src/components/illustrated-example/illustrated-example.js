import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import {container, illustration, textContainer, text, containerLeft} from './illustrated-example.module.css';
import cx from 'classnames';

const IllustratedExample = ({left = false}) => {
    const containerStyles = left ? cx(container, containerLeft) : cx(container);

    return (
        <main className={containerStyles}>
            <StaticImage className={illustration} src='../../images/750x440.svg' alt='A nice placeholder'/>
            <div className={textContainer}>
                <h2>Sed ut perspiciatis unde omnis</h2>
                <p className={text}>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
                </p>
                <button>Voir la formule</button>
            </div>
        </main>
    )
}

export default IllustratedExample;