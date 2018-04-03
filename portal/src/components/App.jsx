import React from 'react'
import Header from './Header.jsx'
import {BrowserRouter as Router, Route, Link, browserHistory} from "react-router-dom";
import Page from './Page.jsx'
import Main from './Main.jsx'
import AboutMe from './AboutMe.jsx'

class App extends React.Component {

  render() {
    return <div>
      <Router history={browserHistory}>
        <div>
          <Header/><Route exact path="/" component={Main}/>
          <Route path="/page" component={Page}/>
          <Route path="/aboutme" component={AboutMe}/>
              </div>
      </Router>
    </div>
  }
}

export default App
