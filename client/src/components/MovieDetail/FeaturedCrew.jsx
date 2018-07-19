import React from 'react'

const FeaturedCrew = (props) => {
  const { crew } = props
  return (
    <ul className="FeaturedCrew">
      {crew.map(c => (
        <li key={c.credit_id}><strong>{c.job}:</strong> {c.name}</li>
      ))}
    </ul>
  )
}

export default FeaturedCrew