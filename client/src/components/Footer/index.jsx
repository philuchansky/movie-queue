import React from 'react'
import poweredByTmdb from './images/poweredByTmdb.svg'
import './Footer.css'

const year = (new Date()).getFullYear()

const Footer = (props) => {
  return (
    <footer className="Footer">
      <div className="container has-text-centered is-size-7">
        <span className="copyright">© {year}. Film data from <a href="https://www.themoviedb.org" target="_blank">TMDb</a>.</span>
        <a href="https://www.themoviedb.org" rel="noopener noreferrer" target="_blank">
          <img className="poweredByTmdb" src={poweredByTmdb} alt="Powered By The Movie DB" />
        </a>
      </div>
    </footer>
  )
}

export default Footer