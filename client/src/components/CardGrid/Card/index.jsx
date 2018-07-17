import React from 'react'
import { Link } from 'react-router-dom'
import { tmdbImgUrl } from '../../../helpers'
import './Card.css'

const Card = (props) => {
  const { movie } = props
  return (
    <div className="Card card">
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

export default Card