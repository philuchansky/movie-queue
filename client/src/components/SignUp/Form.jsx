import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Form = (props) => {
  const { handleSubmit, loading } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label is-medium">Name</label>
        <div className="control has-icons-left has-icons-right">
          <Field className="input is-medium" component="input" type="text" name="name" placeholder="Name" />
          <span className="icon is-medium is-left">
            <FontAwesomeIcon icon={['fas', 'user']} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label is-medium">Email</label>
        <div className="control has-icons-left has-icons-right">
          <Field className="input is-medium" component="input" type="email" name="email" placeholder="Email" />
          <span className="icon is-medium is-left">
            <FontAwesomeIcon icon={['fas', 'envelope']} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label is-medium">Password</label>
        <div className="control has-icons-left has-icons-right">
          <Field className="input is-medium" component="input" type="password" name="password" placeholder="Password" />
          <span className="icon is-medium is-left">
            <i className="fas fa-envelope fa-xs"></i>
            <FontAwesomeIcon icon={['fas', 'lock']} />
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className={`button is-medium is-warning has-text-weight-bold ${loading ? 'is-loading' : ''}`}>
            Sign Up
          </button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'login'
})(Form)