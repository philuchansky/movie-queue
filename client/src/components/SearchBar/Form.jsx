import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Form = (props) => {
  const { handleSubmit, placeholder } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <Field
            type="text"
            className="input"
            name="term"
            component="input"
            placeholder={placeholder}
          />
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