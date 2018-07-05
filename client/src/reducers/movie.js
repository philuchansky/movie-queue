import { GET_MOVIE } from '../types/movies'

export default (state = null, action) => {
  switch(action.type) {
    case GET_MOVIE.LOADING:
    case GET_MOVIE.ERROR:
      return null
    case GET_MOVIE.SUCCESS:
      return action.payload
    default: return state
  }
}