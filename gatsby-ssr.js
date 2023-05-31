import * as React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/Futura/FuturaPTLight.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
            key="AdobeFont"
        />,
        <link
            rel="preload"
            href="/fonts/BC-Alphapipe/BC-Alphapipe-L-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
            key="AdobeFont"
        />,
    ])
}