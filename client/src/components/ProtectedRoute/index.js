import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const { loading, currentUser } = auth
  if(loading) return <h1>Loading From Protected Route...</h1>
  return (
    <Route
      {...rest}
      render={props =>
        currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps)(PrivateRoute)