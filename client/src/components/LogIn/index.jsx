import React from 'react'
import { connect } from 'react-redux'
import { logIn } from '../../actions/users'
import Form from './Form'


class LogIn extends React.Component {

  onFormSubmit(credentials) {
    this.props.logIn(credentials)
  }

  render() {
    return (
      <div className="LogIn">
        <h1 className="title">Log In</h1>
        <Form onSubmit={this.onFormSubmit.bind(this)} />
      </div>
    )
  }
}

export default connect(null, { logIn })(LogIn)