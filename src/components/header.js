import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = ({ siteTitle, headerClass }) => (
  <Navbar className={headerClass} id="mainNav">
    <Container>
      <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
      <Navbar.Collapse id="navbarResponsive">
      <Nav as="ul" className="ml-auto">
        <Nav.Item as="li">
          <Link to={`/about/`} className="nav-link" activeClassName="active">About</Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to={`/posts/`} className="nav-link" activeClassName="active">Post</Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to={`/contact/`} className="nav-link" activeClassName="active">Contact</Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
