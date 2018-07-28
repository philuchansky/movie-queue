import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import missingPeople from './images/missing-people.png'
import './Card.css'

const missingImages = {
  people: missingPeople
}

const Card = (props) => {
  const { imgSrc, label, linkTo, type, onClick, icon } = props
  const card = (
    <div className="Card" onClick={onClick || null}>
      <div className="card">
        {(type || imgSrc) && (
          <div className="card-image">
            <figure className="image">
              <img src={imgSrc || missingImages[type]} alt={label || imgSrc} />
              {icon && <FontAwesomeIcon icon={icon} />}
            </figure>
          </div>
        )}
        {label && (
          <div className="card-content">
            <div className="content">
              {label}
            </div>
          </div>
        )}
      </div>
    </div>
  )

  return linkTo
  ? <Link to={linkTo}>{card}</Link>
  : card
}

Card.propTypes = {
  imgSrc: PropTypes.string,
  label: PropTypes.string,
  linkTo: PropTypes.string,
  type: PropTypes.oneOf(['movies', 'people']),
  onClick: PropTypes.func,
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ])
}

export default Card