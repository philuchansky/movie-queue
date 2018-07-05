import { combineReducers } from 'redux'
import featuredMovies from './featuredMovies'
import movieDetail from './movieDetail'

export default combineReducers({
  featuredMovies,
  movieDetail
})