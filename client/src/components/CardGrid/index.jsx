import React from 'react'
import PropTypes from 'prop-types'
import { chunk } from 'lodash'
import Card from './Card'

const columnMappings = {
  2: "is-one-half",
  3: "is-one-third",
  4: "is-one-fourth",
  5: "is-one-fifth"
}

const CardGrid = (props) => {
  const { data, max, columns, showLabels } = props
  return (
    <div className="CardGrid">
      {chunk(data.slice(0, max || columns * 2 || 10), columns || 5).map((row, rowIdx) => (
        <div key={rowIdx} className="columns">
          {row.map((el, colIdx) => (
            <div key={colIdx} className={`column ${columnMappings[columns] || 'is-one-fifth'}`}>
              <Card movie={el} showLabel={showLabels} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

CardGrid.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.oneOf(['movies', 'cast', 'crew']).isRequired,
  showLabels: PropTypes.bool
}

CardGrid.defaultProps = {
  showLabels: false
}

export default CardGrid