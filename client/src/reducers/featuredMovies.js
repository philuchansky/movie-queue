import { GET_FEATURED_MOVIES } from '../types/movies'

export default (state = [], action) => {
  switch(action.type) {
    case GET_FEATURED_MOVIES.SUCCESS:
      return action.payload
    default: return state
  }
}