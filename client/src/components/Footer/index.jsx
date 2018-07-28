import React from 'react'
import poweredByTmdb from './images/poweredByTmdb.svg'
import './Footer.css'

const Footer = (props) => {
  return (
    <nav className="Footer navbar is-warning">
      <div className="container has-text-centered">
        <a href="https://www.themoviedb.org/" rel="noopener noreferrer" target="_blank">
          <img className="poweredByTmdb" src={poweredByTmdb} alt="Powered By The Movie DB" />
        </a>
      </div>
    </nav>
  )
}

export default Footer