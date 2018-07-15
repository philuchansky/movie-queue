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
    const { auth: { loading } } = this.props
    return (
      <div className="LogIn">
        <div className="columns is-tablet is-centered">
          <div className="column is-half is-narrow">
            <h1 className="title">Log In</h1>
            <Form loading={loading} onSubmit={this.onFormSubmit.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { logIn })(LogIn)