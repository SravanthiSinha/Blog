import React from 'react'
import Album from './Album.jsx'
import sizeMe from 'react-sizeme'
import StackGrid from 'react-stack-grid'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAlbums } from '../actions/Actions.jsx'
import Loader from './Loader.jsx'

class Category extends React.Component {
  constructor (props) {
    super(props)
    this._catname = ''
  }
  componentDidMount () {
    this._catname = this.props.match.params.categoryname
    this.props.fetchAlbums(this._catname)
  }
  componentDidUpdate () {
    this._catname = this.props.match.params.categoryname
    this.props.fetchAlbums(this._catname)
  }
  render () {
    if (this.props.is_fetching) {
      return <Loader is_loading={this.props.is_fetching} />
    } else {
      const category = this._catname
      const albums = this.props.albums.map(function (item) {
        return (
          <div key={item.name}>
            <Album
              value={item.name}
              category={category}
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
