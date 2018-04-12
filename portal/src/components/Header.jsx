import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


import Loader from './Loader.jsx'
import Logo from './Logo.jsx'
import {fetchCategories} from '../actions/Actions.jsx'

import {LinkContainer} from 'react-router-bootstrap'

import '../assets/styles/scss/Navbar.scss'
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  MenuItem,
  NavItem
} from 'react-bootstrap'

// The Header creates links that can be used to navigate
// between routes.
class Header extends React.Component {
  componentDidMount() {
    this.props.fetchCategories()
  }
  render() {
    if (this.props.is_fetching) {
      console.log(this.props.is_fetching)
      return <Loader is_loading={this.props.is_fetching}/>
    } else {
      var categories = []
      for (var key in this.props.categories) {
        categories.push(<LinkContainer to={'/category/' + this.props.categories[key]} key={key}>
          <NavItem eventKey={1}>
            {this.props.categories[key]}
          </NavItem>
        </LinkContainer>)
      }
      return (<header>
        <Navbar collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'><Logo/></Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {categories}
              <LinkContainer to='/aboutme'>
                <NavItem eventKey={2}>
                  about me
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>)
    }
  }
}

const mapStateToProps = state => {
  return {is_fetching: state.is_fetching_categories, categories: state.categories}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCategories
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
