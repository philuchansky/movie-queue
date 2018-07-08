import httpClient from '../httpClient'
import { GET_FEATURED_MOVIES, GET_MOVIE, SEARCH_MOVIES } from '../types/movies'

const getFeaturedMoviesLoading = () => ({ type: GET_FEATURED_MOVIES.LOADING })
// const getFeaturedMoviesError = () => ({ type: GET_FEATURED_MOVIES.ERROR })
const getFeaturedMoviesSuccess = (movies) => ({ type: GET_FEATURED_MOVIES.SUCCESS, payload: movies })
export function getFeaturedMovies() {
  return (dispatch) => {
    dispatch(getFeaturedMoviesLoading())
    httpClient({ method: 'get', url: '/movies' }).then(({ data }) => {
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
    httpClient({ method: 'get', url: `/movies/${title}` }).then(({ data }) => {
      dispatch(getMovieSuccess(data))
    })
  }
}

const searchMoviesLoading = () => ({ type: SEARCH_MOVIES.LOADING })
// const searchMoviesError = () => ({ type: SEARCH_MOVIES.ERROR })
// const searchMoviesSuccess = (results) => ({ type: SEARCH_MOVIES.SUCCESS, payload: results })
export function searchMovies(term) {
  return (dispatch) => {
    dispatch(searchMoviesLoading())
    httpClient({ method: 'get', url: `/movies/search?q=${term}` }).then(({ data }) => {
      console.log(data)
    })
  }
}