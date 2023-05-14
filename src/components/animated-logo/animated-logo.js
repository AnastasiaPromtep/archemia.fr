import * as React from "react";
import {
    container,
    littleCircleVideo,
    littleCircleWeb,
    littleCircleEditor,
    iconVideo,
    iconEditor,
    iconWeb,
    alchemy,
    textContainer,
    textBox,
    logoContainer
} from './animated-logo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faPen, faGlobe } from '@fortawesome/free-solid-svg-icons';

const AnimatedLogo = () => {
  return (
      <main id='animatedLogo' className={ container }>
          <div className={ alchemy }>
              <div className={ logoContainer }>
                  <div className={ littleCircleVideo }>
                      <FontAwesomeIcon icon={ faVideo} className={iconVideo} />
                  </div>
                  <div className={ littleCircleEditor }>
                      <FontAwesomeIcon icon={faPen} className={ iconEditor }/>
                  </div>
                  <div className={ littleCircleWeb }>
                      <FontAwesomeIcon icon={faGlobe} className={ iconWeb }/>
                  </div>
              </div>
              <div className={ textContainer }>
                  <div className={ textBox }>
                      <h1>Vidéo</h1>
                      <h2>Un truc important</h2>
                      <p>
                          On vous fait des vidéo aux petits oignions (bien que Calvin déteste ça)
                          et un rendu super quali avec un grand K. Interview, barmitzvah, film triple A, on s'occupe de tout.
                          En plus Thomas est un dorniste cetifié, dans le domaine on l'appelle le Tom Cruise de la
                          Ford Fiesta. Il même appelé son drone Fuego!. Et il peut même le piloter en VR.
                      </p>
                      <button>
                          Voir des video cool
                      </button>
                  </div>
              </div>
          </div>

      </main>
  );
};

export default AnimatedLogo;


