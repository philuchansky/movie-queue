import { SIGN_UP, LOG_IN, LOG_OUT } from '../types/auth'

export default (state = null, action) => {
  switch(action.type) {
    case LOG_IN.SUCCESS:
    case SIGN_UP.SUCCESS:
      return action.payload
    case LOG_IN.ERROR:
    case LOG_OUT.SUCCESS:
      return null
    default: return state
  }
}