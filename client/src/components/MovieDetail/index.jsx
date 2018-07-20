import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getMovie } from '../../actions/movies'
import { openModalImage, openModalTrailer } from '../../actions/modal'
import { joinBy, tmdbImgUrl, formattedDate, getYear, currency } from '../../helpers'
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

  handlePosterClick() {
    const { openModalImage, movieDetail: { movie } } = this.props
    openModalImage(movie.title, movie.poster_path)
  }

  handleTrailerThumbClick() {
    const { openModalTrailer, movieDetail: { movie } } = this.props
    openModalTrailer(movie.title, movie.trailer.key)
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
                <img
                  src={tmdbImgUrl(movie.poster_path, 'large')}
                  alt={movie.title}
                  onClick={this.handlePosterClick.bind(this)}
                />
              </div>
              <div className="column is-three-quarters">
                <h3 className="title is-3">
                  {movie.title} <small>({getYear(movie.release_date)})</small> <Score percentage={movie.vote_average * 10} />
                </h3>
                
                <div className="columns">
                  <div className="column is-3">
                    <div className="movie-metadata">
                      <MovieMeta label="Release Date" value={formattedDate(movie.release_date)} />
                      <MovieMeta label="Genres" value={joinBy('name', movie.genres)} />
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
                <p className="overview"><strong>Overview:</strong> {movie.overview}</p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-third">
                <h4 className="title is-4">Watch The Trailer</h4>
                {/* <a href={`http://youtube.com/watch?v=${movie.trailer.key}`} target="_blank"> */}
                  <div className="Card card">
                    <div className="card-image">
                      <figure className="image">
                        <img
                          src={`http://img.youtube.com/vi/${movie.trailer.key}/mqdefault.jpg`}
                          alt={movie.trailer.name}
                          onClick={this.handleTrailerThumbClick.bind(this)}
                        />
                      </figure>
                    </div>
                  </div>
              </div>
              <div className="column is-two-thirds">
                <h4 className="title is-4">Featured Cast</h4>
                <CardGrid data={movie.cast} type="people" showLabels />
              </div>
            </div>
            <h3 className="title is-3">You Might Also Like</h3>
            <CardGrid data={movie.recommendations} type="movies" />
          </Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ movieDetail, auth }) => ({ movieDetail, auth })
export default connect(mapStateToProps, { getMovie, openModalImage, openModalTrailer })(MovieDetail)