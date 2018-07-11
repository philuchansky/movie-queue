import React from 'react'
import Form from './Form'

class SignUp extends React.Component {

  onFormSubmit(fields) {
    console.log(fields)
  }

  render() {
    return (
      <div className="SignUp">
        <div className="columns is-tablet is-centered">
          <div className="column is-half is-narrow">
            <h1 className="title">Sign Up</h1>
            <Form onSubmit={this.onFormSubmit.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp