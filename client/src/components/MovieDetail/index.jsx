import React from 'react'
import { connect } from 'react-redux'
import { getMovie } from '../../actions/movies'
import { posterUrl, formattedDate } from '../../helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImdb } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import MovieMeta from './MovieMeta'
import './MovieDetail.css'

const baseImgUrl = 'https://image.tmdb.org/t/p/w780'

class MovieDetail extends React.Component {
  componentDidMount() {
    const { getMovie, match: { params: { id } } } = this.props
    getMovie(id)
  }

  formatGenres(genres) {
    return this.props.movie.genres.map((g) => ' ' + g.name).join().slice(1)
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
            <h1 className="title is-3">{movie.tagline}</h1>
            <div className="movie-metadata">
              <MovieMeta label="Release Date" value={formattedDate(movie.release_date)} />
              <MovieMeta label="Genres" value={this.formatGenres(this.genres)} />
              <Link to="#" className="external-link-icon imdb">
                <FontAwesomeIcon icon={faImdb} />
              </Link>
            </div>
            
            <h4 className="title is-4">Synopsis:</h4>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ movie }) => ({ movie })
export default connect(mapStateToProps, { getMovie })(MovieDetail)