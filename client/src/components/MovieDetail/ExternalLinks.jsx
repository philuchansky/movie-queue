import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExternalLinks = (props) => {
  const { movie } = props
  return (
    <div className="external-links">
      {movie.imdb_id && (
        <a className="external-link-icon imdb" target="_blank"
          href={`https://www.imdb.com/title/${movie.imdb_id}`}
        >
          <FontAwesomeIcon icon={['fab', 'imdb']} />
        </a>
      )}
      {movie.homepage && (
        <a className="external-link-icon has-text-dark-grey" target="_blank" href={movie.homepage}>
          <FontAwesomeIcon icon={['fas', 'globe']} />
        </a>
      )}
    </div>
  )
}

export default ExternalLinks