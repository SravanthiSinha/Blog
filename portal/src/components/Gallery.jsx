import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import '../assets/styles/scss/Gallery.scss'

import { fetchGallery } from '../actions/Actions.jsx'

class Gallery extends React.Component {
  constructor (props) {
    super(props)
    this._album = ''
    this._category = ''
  }
  componentDidMount () {
    this._category = this.props.match.params.categoryname
    this._album = this.props.match.params.albumname
    this.props.fetchGallery(this._category, this._album)
  }
  componentDidUpdate () {
    this._category = this.props.match.params.categoryname
    this._album = this.props.match.params.albumname
    this.props.fetchGallery(this._category, this._album)
  }
  render () {
    if (this.props.is_fetching) {
      console.log(this.props.is_fetching)
      return <Loader is_loading={this.props.is_fetching} />
    } else {
      const images = this.props.gallery.map(function (item) {
        return (
          <img
            src={require(`../assets/images/categories/${item}`)}
            key={item}
          />
        )
      })
      return (
        <main>
          <div className='gallery'>
            <div className='images_container '>
              {images}
            </div>
          </div>
        </main>
      )
    }
  }
}

const mapStateToProps = state => {
  return { is_fetching: state.is_fetching_gallery, gallery: state.gallery }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      fetchGallery
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
