import React from 'react'
import { groupBy } from 'lodash'
import { joinBy } from '../../helpers'
import MovieMeta from './MovieMeta'

const FeaturedCrew = (props) => {
  const { crew } = props
  const groupedCrew = groupBy(crew, 'job')
  return (
    <ul className="FeaturedCrew">
      {Object.keys(groupedCrew).slice(0, 3).map((job, idx) => (
        <MovieMeta key={idx} label={job} value={joinBy('name', groupedCrew[job])} />
      ))}
    </ul>
  )
}

export default FeaturedCrew