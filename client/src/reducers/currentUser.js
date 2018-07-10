import { LOG_IN, LOG_OUT } from '../types/auth'

export default (state = null, action) => {
  switch(action.type) {
    case LOG_IN.SUCCESS:
      return action.payload
    case LOG_IN.ERROR:
    case LOG_OUT.SUCCESS:
      return null
    default: return state
  }
}