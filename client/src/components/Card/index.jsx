import React from 'react'
import PropTypes from 'prop-types'
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
  
  const card = (
    <div className="card">
      <div className="card-image">
        <figure className="image">
            <img src={imgPath} alt={label} />
        </figure>
      </div>
      {showLabel && (
        <div className="card-content">
          <div className="content">
            {label}
          </div>
        </div>
      )}
    </div>
  )

  return (
    <Link className="Card" to={`/${type}/${data.id}`}>
      {card}
    </Link>
  )
}

Card.propTypes = {
  type: PropTypes.string,
  
}

export default Card