import httpClient from '../httpClient'
import { SIGN_UP, LOG_IN, LOG_OUT } from '../types/auth'

const signUpLoading = () => ({ type: SIGN_UP.LOADING })
const signUpError = (message) => ({ type: SIGN_UP.ERROR, payload: message })
const signUpSuccess = (user) => ({ type: SIGN_UP.SUCCESS, payload: user })
export function signUp(fields) {
  return (dispatch) => {
    dispatch(signUpLoading())
    return httpClient({ method: 'post', url: '/users', data: fields })
      .then(({ data: { token, user } }) => {
          httpClient.setToken(token)
          dispatch(signUpSuccess(user))
          return user
      })
      .catch((error) => {
          dispatch(signUpError(error.response.data.message))
          return false
      }) 
  }
}

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

const logOutSuccess = () => ({ type: LOG_OUT.SUCCESS })
export function logOut() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      if(!httpClient.clearToken()) return reject()
      dispatch(logOutSuccess())
      resolve(true)
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