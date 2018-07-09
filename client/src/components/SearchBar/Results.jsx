import React from 'react'
import { Link } from 'react-router-dom'

const baseImgUrl = "https://image.tmdb.org/t/p/w92"

const Results = (props) => {
  const { items } = props
  console.log(items)
  return (
    <nav className="Results panel">
      {items.slice(0, 5).map(item => (
        <Link key={item.id} to={`/movies/${item.id}`} className="panel-block">
          <span className="panel-icon">
            <img src={baseImgUrl + item.poster_path} alt={item.title} />
          </span>
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

export default Results