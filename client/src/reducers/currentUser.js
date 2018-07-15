import { SIGN_UP, LOG_IN, LOG_OUT } from '../types/auth'

const initialState = { loading: false, user: null, error: null }

export default (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN.SUCCESS:
    case SIGN_UP.SUCCESS:
      return { ...state, loading: false, user: action.payload }
    case LOG_IN.LOADING:
    case SIGN_UP.LOADING:
      return { ...state, loading: true }
    case LOG_IN.ERROR:
    case SIGN_UP.ERROR:
      return { ...initialState, loading: false, error: action.payload }
    case LOG_OUT.SUCCESS:
      return initialState
    default: return state
  }
}