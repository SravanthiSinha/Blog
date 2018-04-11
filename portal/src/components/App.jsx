import React from 'react'
import Header from './Header.jsx'
import Main from './Main.jsx'
import AboutMe from './AboutMe.jsx'
import Gallery from './Gallery.jsx'
import Category from './Category.jsx'
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <div>
        <Router history={browserHistory}>
          <div>
            <Header /><Route exact path='/' component={Main} />
            <Route path='/category/:categoryname' component={Category} />
            <Route
              path='/gallery/:categoryname/:albumname'
              component={Gallery}
            />
            <Route path='/aboutme' component={AboutMe} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
