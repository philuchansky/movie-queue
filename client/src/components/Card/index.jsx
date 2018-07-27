import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import missingPeople from './images/missing-people.png'
import './Card.css'

const missingImages = {
  people: missingPeople
}

const Card = (props) => {
  const { imgSrc, label, linkTo, type } = props
  const card = (
    <div className="Card">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={imgSrc || missingImages[type]} alt={label || imgSrc} />
          </figure>
        </div>
        {label && (
          <div className="card-content">
            <div className="content">
              {label}
            </div>
          </div>
        )}
      </div>
    </div>
  )

  return linkTo
  ? <Link to={linkTo}>{card}</Link>
  : card
}

Card.propTypes = {
  imgSrc: PropTypes.string,
  label: PropTypes.string,
  linkTo: PropTypes.string,
  type: PropTypes.oneOf(['movies', 'people'])
}

// const Card = (props) => {
//   const { data, type, showLabel } = props
//   const label = data.title || data.name
//   const imgPath = {
//     "movies": data.poster_path ? tmdbImgUrl(data.poster_path) : '',
//     "people": data.profile_path ? tmdbImgUrl(data.profile_path) : missingAvatar
//   }[type]
  
//   const card = (
//     <div className="card">
//       <div className="card-image">
//         <figure className="image">
//             <img src={imgPath} alt={label} />
//         </figure>
//       </div>
//       {showLabel && (
//         <div className="card-content">
//           <div className="content">
//             {label}
//           </div>
//         </div>
//       )}
//     </div>
//   )

//   return (
//     <Link className="Card" to={`/${type}/${data.id}`}>
//       {card}
//     </Link>
//   )
// }



export default Card