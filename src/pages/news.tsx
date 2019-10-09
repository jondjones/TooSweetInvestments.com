import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const MainContent = styled.div`
  display: block;
`

export default ({ data }) => (
  <Layout>
    <SEO title="News Page" />
      <MainContent>
        {data?.allMarkdownRemark?.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </MainContent>
  </Layout>
)


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`