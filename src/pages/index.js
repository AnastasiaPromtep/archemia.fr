import * as React from "react"
import Layout from "../components/layout";
import Hero from "../components/hero/hero"
import Presentation from "../components/presentaion/presentation";
import IllustratedExample from "../components/illustrated-example/illustrated-example";
import Seo from "../components/seo/seo";
import AnimatedLogo from "../components/animated-logo/animated-logo";
import { container } from './index.module.css';

const IndexPage = () => {
    return (
      <Layout>
        <main id='landingPageContainer' className={ container }>
            <Hero></Hero>
            <AnimatedLogo></AnimatedLogo>
            <Presentation></Presentation>
            <IllustratedExample></IllustratedExample>
            <IllustratedExample left={true}></IllustratedExample>
        </main>
      </Layout>
    );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
