import React from 'react'
import { connect } from 'react-redux'
import { getMovie } from '../../actions/movies'

class MovieDetail extends React.Component {
  componentDidMount() {
    const { getMovie, match: { params: { title } } } = this.props
    getMovie(title)
  }

  render() {
    const { movie } = this.props
    if(!movie) return <h1>Loading...</h1>
    return (
      <div className="MovieDetail container">
        <h1>{movie.Title}</h1>
        <img src={movie.Poster} alt={movie.Title} />
        <ul>
          <li>Year: {movie.Year}</li>
          <li>Genre: {movie.Genre}</li>
          <li>Director: {movie.Director}</li>
          <li>Actors: {movie.Actors}</li>
          <li>Plot: {movie.Plot}</li>
          <li>Production: {movie.Production}</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ movie }) => ({ movie })
export default connect(mapStateToProps, { getMovie })(MovieDetail)