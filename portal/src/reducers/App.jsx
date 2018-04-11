const initialState = {
  categories: {},
  is_fetching_categories: false,
  is_fetching_albums: false,
  is_fetching_gallery: false,
  albums: [],
  gallery: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING':
      return {
        ...state,
        is_fetching: action.is_fetching
      }
    case 'RECEIVED_CATEGORIES':
      return {
        ...state,
        is_fetching_categories: action.is_fetching,
        categories: action.result
      }
    case 'RECEIVED_ALBUMS':
      return {
        ...state,
        is_fetching_albums: action.is_fetching,
        albums: action.result
      }
    case 'RECEIVED_GALLERY':
      return {
        ...state,
        is_fetching_gallery: action.is_fetching,
        gallery: action.result
      }
    default:
      return state
  }
}
