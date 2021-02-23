import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container } from 'react-bootstrap'

export default function BlogPost({ data }) {
  const post = data.contentfulBlogPost
  return (
    <Layout>
      <Container>
        <div>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      body {
        childMarkdownRemark {
          html
        }
      }
      title
    }
  }
`
