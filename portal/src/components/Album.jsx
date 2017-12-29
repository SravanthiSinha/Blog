import React from 'react'
import PropTypes from 'prop-types'

class Album extends React.Component {
  render () {
    const textStyle = {
      width: '100%',
      height: 'auto',
      textAlign: 'center',
      color: 'rgba(255,255,255,.9)',
      bottom: 0,
      background: '#000000c7',
      padding: '1rem',
      position: 'absolute'
    }
    const imageStyle = { opacity: '0.5', width: '100%' }

    return (
      <div>
        <a target='_blank' href='http://google.com'>
          <img src={this.props.image} style={imageStyle} />
          <div style={textStyle}>
            {this.props.value}
          </div>
        </a>
      </div>
    )
  }
}

Album.propTypes = {
  value: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Album
