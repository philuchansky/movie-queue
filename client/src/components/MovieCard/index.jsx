import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.css'

const MovieCard = (props) => {
  const { movie } = props
  return (
    <div className="MovieCard card">
      <div className="card-image">
        <figure className="image">
          <Link to={`/movies/${movie.title}`}>
            <img src={movie.img} alt={movie.title} />
          </Link>
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <Link to={`/movies/${movie.title}`} className="has-text-grey-dark">
            {movie.title}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MovieCard