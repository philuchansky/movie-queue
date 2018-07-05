import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
  <nav className="navbar" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">Movie Queue</Link>
    </div>
    <div className="navbar-menu">
    </div>
  </nav>
)