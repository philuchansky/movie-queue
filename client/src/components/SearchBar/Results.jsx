import React from 'react'
import { Link } from 'react-router-dom'
import { tmdbImgUrl } from '../../helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

const getReleaseYear = (date) => new Date(date).getFullYear()

const Results = (props) => {
  const { items } = props
  return (
    <nav className="Results panel">
      {items.slice(0, 5).map(item => (
        <Link key={item.id} to={`/movies/${item.id}`} className="panel-block">
          <span className="panel-icon">
            {item.poster_path
              ? <img src={tmdbImgUrl(item.poster_path, 'tiny')} alt={item.title} />
              : <FontAwesomeIcon icon={faFilm} />
            }
          </span>
          {item.title} ({getReleaseYear(item.release_date)})
        </Link>
      ))}
    </nav>
  )
}

export default Results