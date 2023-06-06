import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo/seo'
import {graphql} from "gatsby";

const BlogPage = ({ data }) => {
    return (
        <Layout>
            <main id='blogPageContainer'>
                <ul>
                    {
                        data.allFile.nodes.map(node => (
                            <li key={node.name}>
                                {node.name}
                            </li>
                        ))
                    }
                </ul>
            </main>
        </Layout>
    )
}

export const query = graphql`
query {
  allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
    nodes {
      id
      name
    }
  }
}`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage