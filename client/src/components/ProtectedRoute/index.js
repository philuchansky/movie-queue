import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ProtectedRoute.css'

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const { loading, currentUser } = auth
  
  return (
    <div className="ProtectedRoute">
      {loading ? (
        <div className="loading modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content has-text-centered">
            <FontAwesomeIcon icon={['fas', 'spinner']} spin />
          </div>
        </div>
      ) : (
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
      )}
    </div>
  )
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps)(PrivateRoute)