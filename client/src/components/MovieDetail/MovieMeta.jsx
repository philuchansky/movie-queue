import React from 'react'

export default (props) => {
  const { label, value } = props
  return (
    <div className="MovieMeta is-size-6">
      <div className="has-text-weight-bold">{label}:</div> {value}
    </div>
  )
}