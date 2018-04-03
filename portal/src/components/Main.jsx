import React from 'react'
import Gallery from './Gallery.jsx'
import '../assets/styles/scss/Main.scss'

class Main extends React.Component {
  render() {
    return <div id='fullpage'>
      <section >
        <img src={require(`../assets/images/main2.png`)}/></section>
    </div>
  }
}

export default Main
