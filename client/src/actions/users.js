import httpClient from '../httpClient'
import { LOG_IN } from '../types/users'

const logInLoading = () => ({ type: LOG_IN.LOADING })
const logInError = (message) => ({ type: LOG_IN.ERROR, payload: message })
const logInSuccess = (user) => ({ type: LOG_IN.SUCCESS, payload: user })
export function logIn(credentials) {
  return (dispatch) => {
    dispatch(logInLoading())
    httpClient({ method: 'post', url: '/users/authenticate', data: credentials })
      .then(({ data: { success, message, token, user } }) => {
        if(success) {
          httpClient.setToken(token)
          dispatch(logInSuccess(user))
        } else {
          dispatch(logInError(message))
        }
      })
  }
}