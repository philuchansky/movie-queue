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
  const { data, type, imgField, labelField, columns, max } = props
  return (
    <div className="CardGrid">
      {chunk(data.slice(0, max), columns).map((row, rowIdx) => (
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
  imgField: PropTypes.string,
  labelField: PropTypes.string,
  columns: PropTypes.oneOf([2, 3, 4, 5]),
  max: PropTypes.number
}

CardGrid.defaultProps = {
  columns: 5,
  max: 10
}

export default CardGrid