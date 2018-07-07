import { LOG_IN } from '../types/auth'

export default (state = null, action) => {
  switch(action.type) {
    case LOG_IN.SUCCESS:
      return action.payload
    case LOG_IN.ERROR:
      return null
    default: return state
  }
}