import React from 'react'
import { connect } from 'react-redux'
import NavBar from '../NavBar'
import SearchBar from '../SearchBar'
import './Hero.css'

const Hero = (props) => {
  return (
    <section
      className="hero is-warning is-medium"
      style={{background: 'linear-gradient(rgba(255, 221, 87, .45), rgba(255, 221, 87, .45))'}}
    >
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Start Building Your Queue
          </h1>
          <SearchBar placeholder="Mission Impossible" />
        </div>
      </div>
    </section>
  )
}

export default Hero