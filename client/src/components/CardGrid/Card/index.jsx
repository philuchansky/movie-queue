import React from 'react'
import { Link } from 'react-router-dom'
import { tmdbImgUrl } from '../../../helpers'
import './Card.css'

const Card = (props) => {
  const { data, type, showLabel } = props
  const label = data.title || data.name
  const imgPath = data.poster_path || data.profile_path
  return (
    <div className="Card card">
      <div className="card-image">
        <figure className="image">
          <Link to={`/${type}/${data.id}`}>
            <img src={tmdbImgUrl(imgPath, 'medium')} alt={label} />
            {showLabel ? label : null}
          </Link>
        </figure>
      </div>
    </div>
  )
}

export default Card