import React from "react"
import { tmdbImgUrl } from '../../helpers'

const PosterCard = (props) => {
  const { movie } = props
  return (
    <div className="poster Card card">
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

export default PosterCard