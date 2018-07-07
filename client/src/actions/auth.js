import httpClient from '../httpClient'
import { LOG_IN } from '../types/auth'

const logInLoading = () => ({ type: LOG_IN.LOADING })
const logInError = (message) => ({ type: LOG_IN.ERROR, payload: message })
const logInSuccess = (user) => ({ type: LOG_IN.SUCCESS, payload: user })
export function logIn(credentials) {
  return (dispatch) => {
    dispatch(logInLoading())
    return httpClient({ method: 'post', url: '/users/authenticate', data: credentials })
      .then(({ data: { token, user } }) => {
          httpClient.setToken(token)
          dispatch(logInSuccess(user))
          return user
      })
      .catch((error) => {
          dispatch(logInError(error.response.data.message))
          return false
      }) 
  }
}

export function getCurrentUser() {
  return (dispatch) => {
    dispatch(logInLoading())
    return httpClient({ method: 'get', url: '/users/me' }).then(({ data }) => {
      dispatch(logInSuccess(data))
    })
  }
}