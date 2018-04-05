import React from 'react'
import Logo from './Logo.jsx'
import '../assets/styles/scss/Navbar.scss'
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  MenuItem,
  NavItem
} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

class Header extends React.Component {
  render () {
    return (
      <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'><Logo /></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/category/street_photography'>
              <NavItem eventKey={1}>
                street photography
              </NavItem>
            </LinkContainer>
            <LinkContainer to='/category/travel'>
              <NavItem eventKey={1}>

                travel

              </NavItem>
            </LinkContainer>
            <LinkContainer to='/category/food'>
              <NavItem eventKey={1}>

                food
              </NavItem>
            </LinkContainer>
            <LinkContainer to='/social'>
              <NavItem eventKey={2}>

                social
              </NavItem>
            </LinkContainer>
            <LinkContainer to='/aboutme'>
              <NavItem eventKey={2}>
                about me
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header
