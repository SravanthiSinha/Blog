import React from 'react'
import Header from './Header.jsx'
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from 'react-router-dom'
import Categories from './Categories.jsx'
import Main from './Main.jsx'
import AboutMe from './AboutMe.jsx'
import Gallery from './Gallery.jsx'
import Social from './Social.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <Router history={browserHistory}>
          <div>
            <Header /><Route exact path='/' component={Main} />
            <Route path='/category' component={Categories} />
            <Route path='/aboutme' component={AboutMe} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/social' component={Social} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
