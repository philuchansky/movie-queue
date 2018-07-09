import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'

class NavBar extends React.Component {

  state = { active: false }

  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  render() {
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
              <Link to="/queue" className="navbar-item">My Queue</Link>
              <Link to="/login" className="navbar-item">Log In</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar