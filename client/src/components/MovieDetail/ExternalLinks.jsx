import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImdb } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const ExternalLinks = (props) => {
  const { movie } = props
  return (
    <div className="external-links">
      {movie.imdb_id && (
        <a className="external-link-icon imdb" target="_blank"
          href={`https://www.imdb.com/title/${movie.imdb_id}`}
        >
          <FontAwesomeIcon icon={faImdb} />
        </a>
      )}
      {movie.homepage && (
        <a className="external-link-icon has-text-dark-grey" target="_blank" href={movie.homepage}>
          <FontAwesomeIcon icon={faGlobe} />
        </a>
      )}
    </div>
  )
}

export default ExternalLinks