import React from 'react'
import { Link } from 'react-router-dom'
import { posterUrl } from '../../helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

const Results = (props) => {
  const { items } = props
  return (
    <nav className="Results panel">
      {items.slice(0, 5).map(item => (
        <Link key={item.id} to={`/movies/${item.id}`} className="panel-block">
          <span className="panel-icon">
            {item.poster_path
              ? <img src={posterUrl(item.poster_path, 'tiny')} alt={item.title} />
              : <FontAwesomeIcon icon={faFilm} />
            }
          </span>
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

export default Results