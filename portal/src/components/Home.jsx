import React from 'react'

import '../assets/styles/scss/Home.scss'

class Main extends React.Component {
  render () {
    return (
      <div id='fullpage'>
        <section>
          <img src={require(`../assets/images/main2.png`)} />
        </section>
      </div>
    )
  }
}

export default Main
