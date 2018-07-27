import React from 'react'
import { connect } from 'react-redux'
import { openModalImage } from '../../actions/modal'
import { tmdbImgUrl } from '../../helpers'
import Card from '../Card'

const handlePosterCardClick = (actionDispatcher, movie) => {
  actionDispatcher(movie.title, movie.poster_path)
}

const PosterCard = (props) => {
  const { movie, openModalImage } = props
  return (
    <div onClick={handlePosterCardClick.bind(null, openModalImage, movie)}>
      <Card imgSrc={tmdbImgUrl(movie.poster_path)} />
    </div>
  )
}

export default connect(null, { openModalImage })(PosterCard)