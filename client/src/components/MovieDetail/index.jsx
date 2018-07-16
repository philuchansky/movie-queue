import React from 'react'
import { connect } from 'react-redux'
import { getMovie } from '../../actions/movies'
import { posterUrl, formattedDate } from '../../helpers'
import MovieMeta from './MovieMeta'
import QueueButton from '../QueueButton'
import Score from '../Score'
import ExternalLinks from './ExternalLinks'
import './MovieDetail.css'

class MovieDetail extends React.Component {
  componentDidMount() {
    const { getMovie, match: { params: { id } } } = this.props
    getMovie(id)
  }

  formatGenres(genres) {
    return genres.map((g) => ' ' + g.name).join().slice(1)
  }

  render() {
    const { movieDetail: { loading, movie } , auth: { currentUser } } = this.props
    return (
      <div className="MovieDetail">
        {loading && <h1>Loading...</h1>}
        {movie && (
          <div className="columns">
            <div className="column is-one-third">
              <img src={posterUrl(movie.poster_path, 'large')} alt={movie.title} />
            </div>
            <div className="column is-two-thirds">
              <h1 className="title is-2">{movie.title}</h1>
              <strong>Score</strong>: <Score percentage={movie.vote_average * 10} />
              <div className="movie-metadata">
                <MovieMeta label="Release Date" value={formattedDate(movie.release_date)} />
                <MovieMeta label="Genres" value={this.formatGenres(movie.genres)} />
                <MovieMeta label="Runtime" value={`${movie.runtime} minutes`} />
              </div>
              {currentUser ? <QueueButton movie={movie} /> : null}
              <h4 className="title is-4">Synopsis:</h4>
              <p>{movie.overview}</p>
              <ExternalLinks movie={movie} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ movieDetail, auth }) => ({ movieDetail, auth })
export default connect(mapStateToProps, { getMovie })(MovieDetail)