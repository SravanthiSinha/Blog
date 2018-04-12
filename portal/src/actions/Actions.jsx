import categories_data from '../assets/data/categories.json'

function importAll (r) {
  return r.keys().map(r)
}
export function fetchAlbums (categoryname) {
  return dispatch => {
    dispatch({ type: 'FETCHING', is_fetching: true })
    if (categoryname != undefined) {
      const albums = require(
        '../assets/data/categories/' + categoryname + '.json'
      )
      return dispatch({
        type: 'RECEIVED_ALBUMS',
        is_fetching: false,
        result: albums.albums
      })
    } else {
      return dispatch({ type: 'FETCHING', is_fetching: true })
    }
  }
}
export function fetchGallery (categoryname, albumname) {
  return dispatch => {
    dispatch({ type: 'FETCHING', is_fetching: true })
    if (categoryname != undefined && albumname != undefined) {
      const albums = require(
        '../assets/data/categories/' + categoryname + '.json'
      ).albums
      for (var i = 0; i < albums.length; i++) {
        if (albums[i].name == albumname) {
          var gallery = albums[i].files
        }
      }
      return dispatch({
        type: 'RECEIVED_GALLERY',
        is_fetching: false,
        result: gallery
      })
    } else {
      return dispatch({ type: 'FETCHING', is_fetching: true })
    }
  }
}
export function fetchCategories () {
  return dispatch => {
    dispatch({ type: 'FETCHING', is_fetching: true })
    const categories = categories_data['categories']
    return dispatch({
      type: 'RECEIVED_CATEGORIES',
      is_fetching: false,
      result: categories
    })
  }
}
