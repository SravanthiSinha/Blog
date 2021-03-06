import React from 'react'
import { SocialIcons, SocialIcon } from 'react-social-icons'

import '../assets/styles/scss/AboutMe.scss'

class AboutMe extends React.Component {
  noOpen (e) {
    e.preventDefault()
    var mail = document.createElement('a')
    mail.href = 'mailto:theshellzero@gmail.com'
    mail.click()
  }
  render () {
    const url = 'http://twitter.com/shellzero'
    const Center = {
      padding: '2%',
      paddingTop: '80px'
    }
    return (
      <div className='ui' style={Center}>
        <section className='bio'>
          <div>
            <img className='photo' src={require(`../assets/images/me.jpg`)} />
          </div>
          <div className='content'>
            I am a 24 year old software engineer with a knack for photography. Loves to view the world in a different perspective. I wander with my new love Leica Q.
          </div>

          <div className='contact-me'>
            <h4>
              Contact me
            </h4>
            <div className='social-icons'>
              <SocialIcon
                url='https://500px.com/shellzero'
                network='fivehundredpix'
                color='black'
              />
              <SocialIcon url='https://facebook.com/shellzero' color='black' />
              <SocialIcon
                url='https://www.instagram.com/shellzero/'
                color='black'
              />
              <SocialIcon url='http://twitter.com/shellzero' color='black' />
              <SocialIcon
                url='http://linkedin.com/in/jaketrent'
                color='black'
              />
              <SocialIcon
                url='mailto:theshellzero@gmail.com'
                color='black'
                onClick={this.noOpen.bind(this)}
              />

            </div>
          </div>

        </section>

      </div>
    )
  }
}

export default AboutMe
