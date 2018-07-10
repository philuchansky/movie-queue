import React from 'react'
import { Link } from 'react-router-dom'
import { posterUrl } from '../../helpers'
import './MovieCard.css'

const MovieCard = (props) => {
  const { movie } = props
  return (
    <div className="MovieCard card">
      <div className="card-image">
        <figure className="image">
          <Link to={`/movies/${movie.id}`}>
            <img src={posterUrl(movie.poster_path, 'medium')} alt={movie.title} />
          </Link>
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <Link to={`/movies/${movie.id}`} className="has-text-grey-dark">
            {movie.title}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MovieCard