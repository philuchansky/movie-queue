import { SEARCH_MOVIES, CLEAR_SEARCH_RESULTS } from '../types/movies'

export default (state = [], action) => {
  switch(action.type) {
    case SEARCH_MOVIES.SUCCESS:
      return action.payload
    case CLEAR_SEARCH_RESULTS:
      return []
    default: return state
  }
}