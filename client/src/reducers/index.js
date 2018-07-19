import { combineReducers } from 'redux'
import auth from './auth'
import featuredMovies from './featuredMovies'
import movieDetail from './movieDetail'
import searchResults from './searchResults'
import queue from './queue' 
import modal from './modal'
import { reducer as form } from 'redux-form'

export default combineReducers({
  auth,
  featuredMovies,
  movieDetail,
  searchResults,
  queue,
  modal,
  form
})