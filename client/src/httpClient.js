import axios from 'axios'

const httpClient = axios.create({
  baseURL: '/api'
})

httpClient.fetchFeaturedMovies = function() {
  return this({ method: 'get', url: '/movies' })
}

httpClient.fetchMovie = function(title) {
  return this({ method: 'get', url: `/movies/${title}` })
}

export default httpClient