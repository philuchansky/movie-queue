import axios from 'axios'

const httpClient = axios.create({ baseURL: '/api' })

httpClient.getToken = function() {
  return localStorage.getItem('token')
}

httpClient.setToken = function(token) {
  localStorage.setItem('token', token)
  httpClient.defaults.headers.common['token'] = token
  return token
}

httpClient.clearToken = function() {
  localStorage.removeItem('token')
  delete httpClient.defaults.headers.common['token']
  return true
}

const token = httpClient.getToken()
if(token) httpClient.defaults.headers.common['token'] = token

export default httpClient