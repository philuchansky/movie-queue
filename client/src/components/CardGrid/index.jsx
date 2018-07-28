import React from 'react'
import PropTypes from 'prop-types'
import { chunk } from 'lodash'
import { tmdbImgUrl } from '../../helpers'
import Card from '../Card'

const columnMappings = {
  2: "is-one-half",
  3: "is-one-third",
  4: "is-one-fourth",
  5: "is-one-fifth"
}

const CardGrid = (props) => {
  const { type, data, max, columns, imgField, labelField } = props
  return (
    <div className="CardGrid">
      {chunk(data.slice(0, max || columns * 2 || 10), columns || 5).map((row, rowIdx) => (
        <div key={rowIdx} className="columns">
          {row.map((el, colIdx) => (
            <div key={colIdx} className={`column ${columnMappings[columns] || 'is-one-fifth'}`}>
              <Card
                linkTo={`/${type}/${el.id}`}
                type={type}
                imgSrc={el[imgField] ? tmdbImgUrl(el[imgField]) : null}
                label={el[labelField] || null}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

CardGrid.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.oneOf(['movies', 'people']),
  showLabels: PropTypes.bool,
  imgField: PropTypes.string,
  labelField: PropTypes.string,
  columns: PropTypes.oneOf([2, 3, 4, 5])
}

CardGrid.defaultProps = {
  showLabels: false,
  columns: 5
}

export default CardGrid