import React from 'react'
import { Link } from 'react-router-dom'
import { tmdbImgUrl } from '../../helpers'
import './MovieCard.css'

const MovieCard = (props) => {
  const { movie } = props
  return (
    <div className="MovieCard card">
      <div className="card-image">
        <figure className="image">
          <Link to={`/movies/${movie.id}`}>
            <img src={tmdbImgUrl(movie.poster_path, 'medium')} alt={movie.title} />
          </Link>
        </figure>
      </div>
    </div>
  )
}

export default MovieCard