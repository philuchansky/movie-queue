import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Form = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field component="input" type="text" name="email" placeholder="Email" />
      <Field component="input" type="password" name="password" placeholder="Password" />
      <button>Log In</button>
    </form>
  )
}

export default reduxForm({
  form: 'login'
})(Form)