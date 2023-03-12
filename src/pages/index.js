import * as React from "react"
import Layout from "../components/layout";
import Hero from "../components/hero/hero"
import Presentation from "../components/presentaion/presentation";

const IndexPage = () => {
  return (
      <Layout>
        <main>
            <Hero></Hero>
            <Presentation></Presentation>
            <section></section>
        </main>
      </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
