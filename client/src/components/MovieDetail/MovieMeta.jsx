import React from 'react'

export default (props) => {
  const { label, value } = props
  return (
    <div class="is-size-6">
      <span className="has-text-weight-bold">{label}</span>: {value}
    </div>
  )
}