import React from 'react'
import { chunk } from 'lodash'
import MovieCard from '../MovieCard'

const columnMappings = {
  2: "is-one-half",
  3: "is-one-third",
  4: "is-one-fourth",
  5: "is-one-fifth"
}

const MovieGrid = (props) => {
  const { movies, max, columns } = props
  return (
    <div className="MovieGrid">
      {chunk(movies.slice(0, max || columns * 2 || 10), columns || 5).map((row, rowIdx) => (
        <div key={rowIdx} className="columns">
          {row.map((movie, colIdx) => (
            <div key={colIdx} className={`column ${columnMappings[columns] || 'is-one-fifth'}`}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default MovieGrid