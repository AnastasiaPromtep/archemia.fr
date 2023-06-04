import * as React from "react"

import { container } from './index.module.css';

import Layout from "../components/layout";
import Hero from "../components/hero/hero"
import Seo from "../components/seo/seo";
import WorkShowcase from "../components/work-showcase/work-showcase";
import Contact from "../components/contact/contact";
import TeamPreview from "../components/team-preview/team-preview";
import ExpertisePreview from "../components/expertise-preview/expertise-preview";

const IndexPage = () => {
    return (
      <Layout>
        <main id='landingPageContainer' className={ container }>
            <Hero></Hero>
            <ExpertisePreview expertise='edition'></ExpertisePreview>
            <ExpertisePreview expertise='video'></ExpertisePreview>
            <ExpertisePreview expertise='web'></ExpertisePreview>
            <WorkShowcase></WorkShowcase>
            <TeamPreview></TeamPreview>
            <Contact></Contact>
        </main>
      </Layout>
    );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
