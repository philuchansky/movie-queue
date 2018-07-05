import React from 'react'
import { connect } from 'react-redux'
import { getMovie } from '../../actions/movies'
import MovieMeta from './MovieMeta'
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
              <MovieMeta label="Year" value={movie.Year} />
              <MovieMeta label="Genre" value={movie.Genre} />
              <MovieMeta label="Director" value={movie.Director} />
              <MovieMeta label="Cast" value={movie.Actors} />
              <MovieMeta label="Production" value={movie.Production} />
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