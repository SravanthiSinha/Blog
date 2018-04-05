import React from 'react'
import '../assets/styles/scss/Gallery.scss'

class Gallery extends React.Component {
  render () {
    return (
      <div className='gallery'>
        <div className='images_container '>

          <img src={require(`../assets/images/me.jpg`)} />
          <img src={require(`../assets/images/main.png`)} />
          <img src={require(`../assets/images/image.png`)} />

        </div>
      </div>
    )
  }
}

export default Gallery
