import { combineReducers } from 'redux'
import auth from './auth'
import featuredMovies from './featuredMovies'
import movie from './movie'
import searchResults from './searchResults'
import queue from './queue' 
import { reducer as form } from 'redux-form'

export default combineReducers({
  auth,
  featuredMovies,
  movie,
  searchResults,
  queue,
  form,
  loading: (_, action) => action.type.includes("LOADING")
})