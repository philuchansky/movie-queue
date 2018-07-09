import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Form = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <Field component="input" type="text" className="input" name="term" placeholder="Mission Impossible" />
        </div>
        <div className="control">
          <button className="button is-info">
            Search
          </button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'search'
})(Form)