import React from 'react'
import { Link } from 'react-router-dom'

const MovieThumb = (props) => {
  const { movie } = props
  return (
    <div className="MovieThumb">
      <Link to={`/movies/${movie.title}`}>
        <img src={movie.img} alt={movie.title} />
        {movie.title}
      </Link>
    </div>
  )
}

export default MovieThumb