import { combineReducers } from 'redux'
import featuredMovies from './featuredMovies'
import movie from './movie'

export default combineReducers({
  featuredMovies,
  movie
})