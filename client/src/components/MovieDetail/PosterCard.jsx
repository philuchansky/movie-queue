import React from 'react'
import { connect } from 'react-redux'
import { openModalImage } from '../../actions/modal'
import { tmdbImgUrl } from '../../helpers'

const handlePosterCardClick = (actionDispatcher, movie) => {
  actionDispatcher(movie.title, movie.poster_path)
}

const PosterCard = (props) => {
  const { movie, openModalImage } = props
  return (
    <div className="poster Card card"
      onClick={handlePosterCardClick.bind(null, openModalImage, movie)}
    >
      <div className="card-image">
        <figure className="image">
          <img
            src={tmdbImgUrl(movie.poster_path, 'large')}
            alt={movie.title}
          />
        </figure>
      </div>
    </div>
  )
}

export default connect(null, { openModalImage })(PosterCard)