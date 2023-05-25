import * as React from "react";
import {
    footer,
    content,
    logo,
    links,
    social,
    solid,
    mentions
} from './footer.module.css';
import {
    faVideo
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className={ footer }>
            <div className={ content }>
                <div className={ logo }> Archemia</div>
                <div className={ links }>
                    <a href="src/components/footer/footer#">One</a>
                    <a href="src/components/footer/footer#">Two</a>
                    <a href="src/components/footer/footer#">Three</a>
                    <a href="src/components/footer/footer#">Four</a>
                    <a href="src/components/footer/footer#">Five</a>
                </div>

                <div className={ social }>
                    <a className="icon-social" href="src/components/footer/footer#">
                        <FontAwesomeIcon icon={ faVideo }></FontAwesomeIcon>
                    </a>
                    <a className="icon-social" href="src/components/footer/footer#">
                        <FontAwesomeIcon icon={ faVideo }></FontAwesomeIcon>
                    </a>
                    <a className="icon-social" href="src/components/footer/footer#">
                        <FontAwesomeIcon icon={ faVideo }></FontAwesomeIcon>
                    </a>
                </div>

            </div>
            <hr className={ solid } />
            <div className={ mentions }>
                <p>Copyright © 2023 Archemia. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;