import { SEARCH_MOVIES } from '../types/movies'

export default (state = [], action) => {
  switch(action.type) {
    case SEARCH_MOVIES.SUCCESS:
      return action.payload
    default: return state
  }
}