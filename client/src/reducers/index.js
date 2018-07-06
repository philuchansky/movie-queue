import { combineReducers } from 'redux'
import featuredMovies from './featuredMovies'
import movie from './movie'
import { reducer as form } from 'redux-form'

export default combineReducers({
  featuredMovies,
  movie,
  form
})