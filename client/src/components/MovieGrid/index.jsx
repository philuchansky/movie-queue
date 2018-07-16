import React from 'react'
import { chunk } from 'lodash'
import MovieCard from '../MovieCard'

const MovieGrid = (props) => {
  const { movies } = props
  return (
    <div>
      {chunk(movies.slice(0, 10), 5).map((row, rowIdx) => (
        <div key={rowIdx} className="columns">
          {row.map((movie, colIdx) => (
            <div key={colIdx} className="column">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default MovieGrid