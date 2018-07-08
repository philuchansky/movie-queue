import React from 'react'
import { connect } from 'react-redux'
import { logIn } from '../../actions/auth'
import Form from './Form'


class LogIn extends React.Component {

  onFormSubmit(credentials) {
    const { logIn, history } = this.props
    logIn(credentials).then(user => {
      if(user) return history.push('/')
    })
  }

  render() {
    return (
      <div className="LogIn">
        <div className="columns is-tablet is-centered">
          <div className="column is-half is-narrow">
            <h1 className="title">Log In</h1>
            <Form onSubmit={this.onFormSubmit.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { logIn })(LogIn)