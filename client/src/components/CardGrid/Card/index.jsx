import React from 'react'
import { Link } from 'react-router-dom'
import { tmdbImgUrl } from '../../../helpers'
import missingAvatar from './images/missingAvatar.png'
import './Card.css'

const Card = (props) => {
  const { data, type, showLabel } = props
  const label = data.title || data.name
  const imgPath = {
    "movies": data.poster_path ? tmdbImgUrl(data.poster_path) : '',
    "people": data.profile_path ? tmdbImgUrl(data.profile_path) : missingAvatar
  }[type]
  
  return (
    <div className="Card card">
      <div className="card-image">
        <figure className="image">
          <Link to={`/${type}/${data.id}`}>
            <img src={imgPath} alt={label} />
            {showLabel ? label : null}
          </Link>
        </figure>
      </div>
    </div>
  )
}

export default Card