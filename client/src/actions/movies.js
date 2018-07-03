import axios from 'axios'
import { GET_FEATURED_MOVIES } from '../types/movies'

const getFeaturedMoviesLoading = () => ({ type: GET_FEATURED_MOVIES.LOADING })
const getFeaturedMoviesError = () => ({ type: GET_FEATURED_MOVIES.ERROR })
const getFeaturedMoviesSuccess = (movies) => ({ type: GET_FEATURED_MOVIES.SUCCESS, payload: movies })
export function getFeaturedMovies() {
  return (dispatch) => {
    dispatch(getFeaturedMoviesLoading())
    axios('/api/movies').then(({ data }) => {
      console.log(data)
    })
  }
}