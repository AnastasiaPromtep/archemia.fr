import * as React from "react"
import Layout from "../components/layout";
import Hero from "../components/hero/hero"
import Presentation from "../components/presentaion/presentation";
import IllustratedExample from "../components/illustrated-example/illustrated-example";
import Seo from "../components/seo/seo";

const IndexPage = () => {
  return (
      <Layout>
        <main>
            <Hero></Hero>
            <Presentation></Presentation>
            <IllustratedExample></IllustratedExample>
            <IllustratedExample left={true}></IllustratedExample>
        </main>
      </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
