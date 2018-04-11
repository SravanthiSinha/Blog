import React from 'react'
import PropTypes from 'prop-types'

export default class Loader extends React.Component {
  render () {
    const style = {
      display: this.props.is_loading ? 'block' : 'none',
      width: '200px'
    }
    return (
      <div>
        <img src={require('../assets/images/spinner.gif')} style={style} />
      </div>
    )
  }
}

Loader.propTypes = {
  is_loading: PropTypes.bool.isRequired
}

Loader.defaultProps = {
  is_loading: false
}
