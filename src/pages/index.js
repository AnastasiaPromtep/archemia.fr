import * as React from "react"
import Layout from "../components/layout";
import Hero from "../components/hero/hero"
import Seo from "../components/seo/seo";
import AnimatedLogo from "../components/animated-logo/animated-logo";
import { container } from './index.module.css';
import WorkShowcase from "../components/work-showcase/work-showcase";
import Contact from "../components/contact/contact";

const IndexPage = () => {
    return (
      <Layout>
        <main id='landingPageContainer' className={ container }>
            <Hero></Hero>
            <AnimatedLogo></AnimatedLogo>
            <WorkShowcase></WorkShowcase>
            <Contact></Contact>
        </main>
      </Layout>
    );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
