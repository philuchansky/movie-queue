import React from 'react'
import { Link } from 'react-router-dom'

const MovieThumb = (props) => {
  const { movie } = props
  return (
    <div className="MovieThumb card">
      <div className="card-image">
        <figure className="image">
          <Link to={`/movies/${movie.title}`}>
            <img src={movie.img} alt={movie.title} />
          </Link>
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p className="title is-4">
            <Link to={`/movies/${movie.title}`}>{movie.title}</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieThumb