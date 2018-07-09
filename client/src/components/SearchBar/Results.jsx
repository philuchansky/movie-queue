import React from 'react'
import { Link } from 'react-router-dom'

const Results = (props) => {
  const { items } = props
  return (
    <nav className="Results panel">
      {items.slice(0, 5).map(item => (
        <Link key={item.imdbID} to={`/movies/${item.Title}`} className="panel-block">
          <span className="panel-icon">
            {/* <i className="fas fa-book" aria-hidden="true"></i> */}
            <img src={item.Poster} alt={item.Title} />
          </span>
          {item.Title}
        </Link>
      ))}
    </nav>
  )
}

export default Results