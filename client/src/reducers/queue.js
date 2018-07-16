import { GET_QUEUE, ADD_TO_QUEUE, REMOVE_FROM_QUEUE } from '../types/queue'

const initialState = { loading: false, movies: [] }

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_QUEUE.SUCCESS:
      return { ...state, loading: false, movies: action.payload }
    case ADD_TO_QUEUE.SUCCESS:
      return {
        ...state, loading: false,
        movies: [ ...state.movies, action.payload ]
      }
    case REMOVE_FROM_QUEUE.SUCCESS:
      return {
        ...state, loading: false,
        movies: state.movies.filter((queueItem) => queueItem._id !== action.payload._id)
      }
    default: return state
  }
}