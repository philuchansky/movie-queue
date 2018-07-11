import { combineReducers } from 'redux'
import currentUser from './currentUser'
import featuredMovies from './featuredMovies'
import movie from './movie'
import searchResults from './searchResults'
import queue from './queue'
import { reducer as form } from 'redux-form'

export default combineReducers({
  currentUser,
  featuredMovies,
  movie,
  searchResults,
  queue,
  form
})