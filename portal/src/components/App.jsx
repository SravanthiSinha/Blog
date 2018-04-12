import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from './Header.jsx'
import Category from './Category.jsx'
import Home from './Home.jsx'
import AboutMe from './AboutMe.jsx'
import Gallery from './Gallery.jsx'

export default class App extends React.Component {
  render() {
    return (<div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/category/:categoryname' component={Category}/>
        <Route path='/gallery/:categoryname/:albumname' component={Gallery}/>
        <Route path='/aboutme' component={AboutMe}/>
      </Switch>
    </div>)
  }
}
