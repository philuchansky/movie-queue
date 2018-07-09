import React from 'react'

const Results = (props) => {
  const { items } = props
  console.log(items)
  return (
    <nav className="panel">
      {items.slice(0, 5).map(item => (
        <a key={item.imdbID} className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          {item.Title}
        </a>
      ))}
    </nav>
  )
}

export default Results