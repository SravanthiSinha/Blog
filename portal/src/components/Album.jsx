import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Gallery from './Gallery.jsx'

class Album extends React.Component {
  constructor () {
    super()
    const imageStyle = {
      filter: 'brightness(100%)',
      width: '100%'
    }
    this.state = {
      textStyle: {
        display: 'none'
      },
      imageStyle: imageStyle
    }
  }
  // set the text
  onMouseover (e) {
    const textStyle = {
      width: '100%',
      textAlign: 'center',
      color: 'rgba(255,255,255,.9)',
      top: '50%',
      transform: 'translateY(-50%)',
      position: 'absolute',
      display: 'block',
      textTransform: 'capitalize'
    }
    const imageStyle = {
      filter: 'brightness(50%)',
      width: '100%'
    }
    this.setState({ textStyle: textStyle, imageStyle: imageStyle })
  }
  onMouseout (e) {
    const textStyle = {
      display: 'none'
    }
    const imageStyle = {
      filter: 'brightness(100%)',
      width: '100%'
    }
    this.setState({ textStyle: textStyle, imageStyle: imageStyle })
  }
  render () {
    return (
      <div
        onMouseEnter={this.onMouseover.bind(this)}
        onMouseLeave={this.onMouseout.bind(this)}
      >
        <Link
          to={
            '/gallery/' + this.props.categoryname + '/' + this.props.albumname
          }
        >
          <img src={this.props.image} style={this.state.imageStyle} />
          <div style={this.state.textStyle}>
            {this.props.value}
          </div>
        </Link>
      </div>
    )
  }
}

Album.propTypes = {
  value: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  categoryname: PropTypes.string.isRequired,
  albumname: PropTypes.string.isRequired
}

export default Album
