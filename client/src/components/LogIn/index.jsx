import React from 'react'
import Form from './Form'


class LogIn extends React.Component {
  render() {
    return (
      <div className="LogIn">
        <h1>Log In</h1>
        <Form onSubmit={(fields) => console.log(fields)} />
      </div>
    )
  }
}

export default LogIn