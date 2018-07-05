import axios from 'axios'
import { GET_FEATURED_MOVIES, GET_MOVIE } from '../types/movies'

const getFeaturedMoviesLoading = () => ({ type: GET_FEATURED_MOVIES.LOADING })
// const getFeaturedMoviesError = () => ({ type: GET_FEATURED_MOVIES.ERROR })
const getFeaturedMoviesSuccess = (movies) => ({ type: GET_FEATURED_MOVIES.SUCCESS, payload: movies })
export function getFeaturedMovies() {
  return (dispatch) => {
    dispatch(getFeaturedMoviesLoading())
    axios('/api/movies').then(({ data }) => {
      dispatch(getFeaturedMoviesSuccess(data))
    })
  }
}

const getMovieLoading = () => ({ type: GET_MOVIE.LOADING })
// const getMovieError = () => ({ type: GET_MOVIE.ERROR })
const getMovieSuccess = (movie) => ({ type: GET_MOVIE.SUCCESS, payload: movie })
export function getMovie(title) {
  return (dispatch) => {
    dispatch(getMovieLoading())
    axios(`/api/movies/${title}`).then(({ data }) => {
      dispatch(getMovieSuccess(data))
    })
  }
}