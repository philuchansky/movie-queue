import { ADD_TO_QUEUE, REMOVE_FROM_QUEUE } from '../types/queue'

export default (state = [], action) => {
  switch(action.type) {
    case ADD_TO_QUEUE.SUCCESS:
      return [...state, action.payload]
    case REMOVE_FROM_QUEUE.SUCCESS:
      return state.filter((queueItem) => queueItem._id !== action.payload._id)
    default: return state
  }
}