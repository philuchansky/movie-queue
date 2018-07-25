import React from 'react'
import PropTypes from 'prop-types'
import { chunk } from 'lodash'
import { tmdbImgUrl } from '../../helpers'
import Card from '../Card'
import missingAvatar from './images/missingAvatar.png'

const columnMappings = {
  2: "is-one-half",
  3: "is-one-third",
  4: "is-one-fourth",
  5: "is-one-fifth"
}

// const imgPath = {
//   "movies": data.poster_path ? tmdbImgUrl(data.poster_path) : '',
//   "people": data.profile_path ? tmdbImgUrl(data.profile_path) : missingAvatar
// }[type]

const CardGrid = (props) => {
  const { type, data, max, columns, label, imgField } = props
  return (
    <div className="CardGrid">
      {chunk(data.slice(0, max || columns * 2 || 10), columns || 5).map((row, rowIdx) => (
        <div key={rowIdx} className="columns">
          {row.map((el, colIdx) => (
            <div key={colIdx} className={`column ${columnMappings[columns] || 'is-one-fifth'}`}>
              <Card
                data={el}
                label={el[label]}
                linkTo={`/${type}/${el.id}`}
                imgSrc={el[imgField] ? tmdbImgUrl(el[imgField]) : missingAvatar}
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
  type: PropTypes.string,
  showLabels: PropTypes.bool
}

CardGrid.defaultProps = {
  showLabels: false
}

export default CardGrid