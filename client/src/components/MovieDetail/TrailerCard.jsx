import React from 'react'
import { connect } from 'react-redux'
import { openModalTrailer } from '../../actions/modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const handleTrailerCardClick = (actionDispatcher, movie) => {
  actionDispatcher(movie.title, movie.trailer.key)
}

const TrailerCard = (props) => {
  const { movie, openModalTrailer } = props
  return (
    <div className="trailer Card card"
      onClick={handleTrailerCardClick.bind(null, openModalTrailer, movie)}
    >
      <div className="card-image">
        <figure className="image">
          <img
            src={`http://img.youtube.com/vi/${movie.trailer.key}/mqdefault.jpg`}
            alt={movie.trailer.name}
          />
          <FontAwesomeIcon icon={faPlayCircle} />
        </figure>
      </div>
    </div>
  )
}

export default connect(null, { openModalTrailer })(TrailerCard)