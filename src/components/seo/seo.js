import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

const Seo = ({ title }) => {
    const data = useStaticQuery(graphql`query {
      site {
        siteMetadata {
          title
          image
          siteUrl
        }
      }
    }`);

    const icon = `${data.site.siteMetadata.siteUrl}${data.site.siteMetadata.image}`;

    return (
        <>
            <title>{title} | {data.site.siteMetadata.title}</title>
            <meta name="image" content={data.site.siteMetadata.image} />
            <link rel="icon" href={icon} />
        </>
    );
}

export default Seo;