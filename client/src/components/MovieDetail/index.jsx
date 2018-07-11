import React from 'react'
import { connect } from 'react-redux'
import { getMovie } from '../../actions/movies'
import { posterUrl, formattedDate } from '../../helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImdb } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import MovieMeta from './MovieMeta'
import Score from '../Score'
import './MovieDetail.css'

class MovieDetail extends React.Component {
  componentDidMount() {
    const { getMovie, match: { params: { id } } } = this.props
    getMovie(id)
  }

  formatGenres(genres) {
    return this.props.movie.genres.map((g) => ' ' + g.name).join().slice(1)
  }

  handleAddToQueueClick() {
    const { movie } = this.props
    console.log(movie)
  }

  render() {
    const { movie } = this.props
    if(!movie) return <h1>Loading...</h1>
    return (
      <div className="MovieDetail">
        <div className="columns">
          <div className="column is-one-third">
            <img src={posterUrl(movie.poster_path, 'large')} alt={movie.title} />
          </div>
          <div className="column is-two-thirds">
            <h1 className="title is-2">{movie.title}</h1>
            <strong>Score</strong>: <Score percentage={movie.vote_average * 10} />
            <div className="movie-metadata">
              <MovieMeta label="Release Date" value={formattedDate(movie.release_date)} />
              <MovieMeta label="Genres" value={this.formatGenres(this.genres)} />
              <MovieMeta label="Runtime" value={`${movie.runtime} minutes`} />
            </div>
            <div className="queue-button">
              <button className="button is-info" onClick={this.handleAddToQueueClick.bind(this)}>Add To Queue</button>
            </div>
            
            <h4 className="title is-4">Synopsis:</h4>
            <p>{movie.overview}</p>
            <div className="external-links">
                {movie.imdb_id && (
                  <a className="external-link-icon imdb" target="_blank"
                    href={`https://www.imdb.com/title/${movie.imdb_id}`}
                  >
                    <FontAwesomeIcon icon={faImdb} />
                  </a>
                )}
                {movie.homepage && (
                  <a className="external-link-icon has-text-dark-grey" target="_blank" href={movie.homepage}>
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                )}
              </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ movie }) => ({ movie })
export default connect(mapStateToProps, { getMovie })(MovieDetail)