import { GET_MOVIE } from '../types/movies'

const initialState = { loading: false, movie: null }

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_MOVIE.LOADING:
      return { ...state, loading: true, movie: null }
    case GET_MOVIE.SUCCESS:
      return { ...state, loading: false, movie: action.payload }
    case GET_MOVIE.ERROR:
      return initialState
    default: return state
  }
}