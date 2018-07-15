import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { logOut } from '../../actions/auth'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'

class NavBar extends React.Component {

  state = { active: false }

  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  handleLogOutClick() {
    const { logOut, history } = this.props
    logOut().then(() => history.push('/'))
  }

  render() {
    const { auth: { currentUser } } = this.props
    const { active } = this.state
    return (
      <nav className="NavBar navbar is-warning" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="logo navbar-item" to="/">
              <FontAwesomeIcon icon={faFilm} /> Queue
            </Link>
            <a role="button" aria-label="menu" aria-expanded="false"
              onClick={this.toggleActive.bind(this)}
              className={`navbar-burger ${active ? 'is-active' : '' }`}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${active ? 'is-active' : '' }`}>
            <div className="navbar-end">
              <Link to="/" className="navbar-item">Home</Link>
              {currentUser
                ? (
                  <Fragment>
                    <Link to="/queue" className="navbar-item">My Queue</Link>
                    <a onClick={this.handleLogOutClick.bind(this)} className="navbar-item">Log Out</a>
                  </Fragment>
                )
                : (
                  <Fragment>
                    <Link to="/signup" className="navbar-item">Sign Up</Link>
                    <Link to="/login" className="navbar-item">Log In</Link>
                  </Fragment>
                )
              }
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { logOut })(withRouter(NavBar))