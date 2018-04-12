import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import sizeMe from 'react-sizeme'
import StackGrid from 'react-stack-grid'

import { fetchAlbums } from '../actions/Actions.jsx'
import Loader from './Loader.jsx'
import Album from './Album.jsx'

class Category extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    this.props.fetchAlbums(this.props.match.params.categoryname)
  }
  componentDidUpdate () {
    this.props.fetchAlbums(this.props.match.params.categoryname)
  }
  render () {
    if (this.props.is_fetching) {
      return <Loader is_loading={this.props.is_fetching} />
    } else {
      const categoryname = this.props.match.params.categoryname
      const albums = this.props.albums.map(function (item) {
        return (
          <div key={item.name}>
            <Album
              value={item.name}
              categoryname={categoryname}
              albumname={item.name}
              image={require(`../assets/images/categories/${item.poster}`)}
            />
          </div>
        )
      })
      const {
        size: {
          width
        }
      } = this.props
      const Center = {
        padding: '2%',
        paddingTop: '80px'
      }
      return (
        <div className='ui' style={Center}>
          <StackGrid
            columnWidth={width <= 768 ? '100%' : '33.33%'}
            monitorImagesLoaded
          >
            {albums}
          </StackGrid>
        </div>
      )
    }
  }
}

function mapStateToProps (state) {
  return { is_fetching: state.is_fetching_albums, albums: state.albums }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      fetchAlbums
    },
    dispatch
  )
}

const SizeAwareComponent = sizeMe()(Category)
function MyComponentWrapper (props) {
  return <SizeAwareComponent {...props} />
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponentWrapper)
