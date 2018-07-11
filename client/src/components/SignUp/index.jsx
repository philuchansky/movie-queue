import React from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../actions/auth'
import Form from './Form'

class SignUp extends React.Component {

  onFormSubmit(fields) {
    const { signUp, history } = this.props
    signUp(fields).then(user => {
      if(user) return history.push('/')
    })
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

export default connect(null, { signUp })(SignUp)