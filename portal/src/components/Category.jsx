import React from 'react'
import Album from './Album.jsx'
import sizeMe from 'react-sizeme'
import StackGrid from 'react-stack-grid'
import PropTypes from 'prop-types'

class Category extends React.Component {
  render () {
    const albums = this.props.datum.map(function (item) {
      return (
        <div key={item.value}>
          <Album
            value={item.value}
            image={require(`../assets/images/${item.imagesrc}`)}
          />
        </div>
      )
    })
    const {
      size: {
        width
      }
    } = this.props

    return (
      <StackGrid
        columnWidth={width <= 768 ? '100%' : '33.33%'}
        monitorImagesLoaded
      >
        {albums}
      </StackGrid>
    )
  }
}
Category.propTypes = {
  datum: PropTypes.any.isRequired
}

export default sizeMe()(Category)
