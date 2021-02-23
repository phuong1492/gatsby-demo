import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { Container } from 'react-bootstrap'
import "../styles/main.css"
export default function Home({ data }) {
  return (
    <Layout current_path="/">
      <header className="masthead">
        <Container as="div" className="d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">Grayscale</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2>
            <a className="btn btn-primary js-scroll-trigger" href="about">Get Started</a>
          </div>
        </Container>
      </header>
    </Layout>
  )
}
