import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
  <nav className="navbar" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">Movie Queue</Link>
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div className="navbar-menu">
      <div class="navbar-start">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/queue" className="navbar-item">My Queue</Link>
      </div>
    </div>
  </nav>
)