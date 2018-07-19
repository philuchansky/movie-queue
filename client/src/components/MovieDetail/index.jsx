import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getMovie } from '../../actions/movies'
import { tmdbImgUrl, formattedDate, getYear, currency } from '../../helpers'
import MovieMeta from './MovieMeta'
import QueueButton from '../QueueButton'
import Score from '../Score'
import FeaturedCrew from './FeaturedCrew'
import ExternalLinks from './ExternalLinks'
import CardGrid from '../CardGrid'
import './MovieDetail.css'

class MovieDetail extends React.Component {
  componentDidMount() {
    const { getMovie, match: { params: { id } } } = this.props
    getMovie(id)
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id: prevMovieId } } } = prevProps
    const { getMovie, match: { params: { id: currentMovieId } } } = this.props
    if(prevMovieId !== currentMovieId) getMovie(currentMovieId)
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
          <Fragment>
            <div className="columns">
              <div className="column is-one-quarter">
                <img src={tmdbImgUrl(movie.poster_path, 'large')} alt={movie.title} />
              </div>
              <div className="column is-three-quarters">
                <h3 className="title is-3">
                  <Score percentage={movie.vote_average * 10} /> {movie.title} <small>({getYear(movie.release_date)})</small> 
                </h3>
                <p className="overview"><strong>Overview:</strong> {movie.overview}</p>
                <div className="columns">
                  <div className="column is-3">
                    <div className="movie-metadata">
                      <MovieMeta label="Release Date" value={formattedDate(movie.release_date)} />
                      <MovieMeta label="Genres" value={this.formatGenres(movie.genres)} />
                    </div>
                    {currentUser ? <QueueButton movie={movie} /> : null}
                  </div>
                  <div className="column is-3">
                    <div className="movie-metadata">
                      <MovieMeta label="Runtime" value={`${movie.runtime} minutes`} />
                      <MovieMeta label="Budget" value={currency.format(movie.budget)} />
                    </div>
                    <ExternalLinks movie={movie} />
                  </div>
                  <div className="column">
                    <FeaturedCrew crew={movie.crew} />
                  </div>
                </div> 
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-half">
                <h2 className="title">Featured Cast</h2>
                <CardGrid data={movie.cast} type="people" showLabels />
              </div>
              <div className="column is-one-half">

              </div>
            </div>
            <h2 className="title">You Might Also Like</h2>
            <CardGrid data={movie.recommendations} type="movies" />
          </Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ movieDetail, auth }) => ({ movieDetail, auth })
export default connect(mapStateToProps, { getMovie })(MovieDetail)