import * as React from "react";
import { container,
    cardVideo,
    cardEditor,
    cardWeb,
    littleCircleVideo,
    littleCircleWeb,
    littleCircleEditor,
    iconVideo,
    iconEditor,
    iconWeb} from './animated-logo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faPen, faGlobe } from '@fortawesome/free-solid-svg-icons';

const AnimatedLogo = () => {
  return (
      <main id='animatedLogo' className={ container }>
          <div className={ cardVideo }>
              <div className={ littleCircleVideo }>
                  <FontAwesomeIcon icon={ faVideo} className={iconVideo} />
              </div>
              <p>
                  Nous façonnons votre contenu pour qu'ils soit incroyable. ifzeoijfoij foizejfoizejf ozejf oizje foijz
                  ofjzoijfz ozj ofizej foizjef ozijf oizej oizje foijze fozje
                  Nous façonnons votre contenu pour qu'ils soit incroyable. ifzeoijfoij foizejfoizejf ozejf oizje foijz
                  ofjzoijfz ozj ofizej foizjef ozijf oizej oizje foijze fozje
                  Nous façonnons votre contenu pour qu'ils soit incroyable. ifzeoijfoij foizejfoizejf ozejf oizje foijz
                  ofjzoijfz ozj ofizej foizjef ozijf oizej oizje foijze fozje
                  Nous façonnons votre contenu pour qu'ils soit incroyable.
              </p>
          </div>

          <div className={ cardEditor }>
              <div className={ littleCircleEditor }>
                  <FontAwesomeIcon icon={faPen} className={ iconEditor }/>
              </div>
              <p>
                  Nous façonnons votre contenu pour qu'ils soit incroyable. ifzeoijfoij foizejfoizejf ozejf oizje foijz
                  ofjzoijfz ozj ofizej foizjef ozijf oizej oizje foijze fozje
                  Nous façonnons votre contenu pour qu'ils soit incroyable. ifzeoijfoij foizejfoizejf ozejf oizje foijz
                  ofjzoijfz ozj ofizej foizjef ozijf oizej oizje foijze fozje
                  Nous façonnons votre contenu pour qu'ils soit incroyable. ifzeoijfoij foizejfoizejf ozejf oizje foijz
                  ofjzoijfz ozj ofizej foizjef ozijf oizej oizje foijze fozje
                  Nous façonnons votre contenu pour qu'ils soit incroyable.
              </p>
          </div>

          <div className={ cardWeb }>
              <div className={ littleCircleWeb }>
                  <FontAwesomeIcon icon={faGlobe} className={ iconWeb }/>
              </div>
              <p>
                  Nous façonnons votre contenu pour qu'ils soit incroyable. ifzeoijfoij foizejfoizejf ozejf oizje foijz
                  ofjzoijfz ozj ofizej foizjef ozijf oizej oizje foijze fozje
                  Nous façonnons votre contenu pour qu'ils soit incroyable. ifzeoijfoij foizejfoizejf ozejf oizje foijz
                  ofjzoijfz ozj ofizej foizjef ozijf oizej oizje foijze fozje
                  Nous façonnons votre contenu pour qu'ils soit incroyable. ifzeoijfoij foizejfoizejf ozejf oizje foijz
                  ofjzoijfz ozj ofizej foizjef ozijf oizej oizje foijze fozje
                  Nous façonnons votre contenu pour qu'ils soit incroyable.
              </p>
          </div>
      </main>
  );
};

export default AnimatedLogo;