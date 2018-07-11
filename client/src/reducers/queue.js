import { ADD_TO_QUEUE } from '../types/queue'

export default (state = [], action) => {
  switch(action.type) {
    case ADD_TO_QUEUE.SUCCESS:
      return [...state, action.payload]
    default: return state
  }
}