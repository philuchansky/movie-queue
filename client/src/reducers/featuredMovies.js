import { GET_FEATURED_MOVIES } from '../types/movies'

const initialState = { loading: false, movies: [] }

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_FEATURED_MOVIES.LOADING:
      return { ...state, loading: true }
    case GET_FEATURED_MOVIES.SUCCESS:
      return { ...state, loading: false, movies: action.payload }
    case GET_FEATURED_MOVIES.ERROR:
      return initialState
    default: return state
  }
}