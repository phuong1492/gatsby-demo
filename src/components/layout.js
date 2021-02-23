import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const current_path = window.location.pathname
  let headerClass = "navbar navbar-expand-lg navbar-light fixed-top navbar-shrink"
  let classContent = "padding-top-100"
  if (current_path === "/"){
      headerClass = "navbar navbar-expand-lg navbar-light fixed-top"
      classContent = ""
  }
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} headerClass={headerClass} />
      <main className={classContent}>
      {children}</main>
      <footer className="fixed-bottom">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}
