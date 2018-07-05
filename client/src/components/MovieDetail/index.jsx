import React from 'react'
import { connect } from 'react-redux'
import { getMovie } from '../../actions/movies'
import './styles.css'

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
        <div className="columns">
          <div className="column is-one-third">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="column is-two-thirds">
            <h1 className="title is-2">{movie.Title}</h1>
            <div className="movie-metadata">
              <div class="is-size-6">
                <span className="has-text-weight-bold">Year</span>: {movie.Year}
              </div>
              <div class="is-size-6">
                <span className="has-text-weight-bold">Genre</span>: {movie.Genre}
              </div>
              <div class="is-size-6">
                <span className="has-text-weight-bold">Director</span>: {movie.Director}
              </div>
              <div class="is-size-6">
                <span className="has-text-weight-bold">Cast</span>: {movie.Actors}
              </div>
              <div class="is-size-6">
                <span className="has-text-weight-bold">Production</span>: {movie.Production}
              </div>
            </div>
            <h4 className="title is-4">Synopsis:</h4>
            <p>{movie.Plot}</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ movie }) => ({ movie })
export default connect(mapStateToProps, { getMovie })(MovieDetail)