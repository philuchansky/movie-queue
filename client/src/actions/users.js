import httpClient from '../httpClient'
import { LOG_IN } from '../types/users'

const logInLoading = () => ({ type: LOG_IN.LOADING })
// const logInError = () => ({ type: LOG_IN.ERROR })
export function logIn(credentials) {
  return (dispatch) => {
    dispatch(logInLoading())
    httpClient.authenticate(credentials)
  }
}