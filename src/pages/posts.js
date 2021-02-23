import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { Container } from 'react-bootstrap'
import "../styles/main.css"
export default function Posts({ data }) {
  return (
    <Layout>
      <Container>
        <div>
          <h1>
            My Post
          </h1>
          <h4>{data.allContentfulBlogPost.totalCount} Posts</h4>
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.slug}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <h3
                  css={css`
                    margin-bottom: ${rhythm(1 / 4)};
                  `}
                >
                  {node.title}{" "}
                  <span
                    css={css`
                      color: #555;
                    `}
                  >
                    — {node.createdAt}
                  </span>
                </h3>
                <p>{node.body.childMarkdownRemark.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPost(sort: {fields: createdAt, order: DESC}) {
      totalCount
      edges {
        node {
          id
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          title
          createdAt(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`
