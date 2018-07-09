import React from 'react'
import NavBar from '../NavBar'
import SearchBar from '../SearchBar'

const Hero = (props) => {
  return (
    <section className="hero is-warning is-medium">
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Start Building Your Queue
          </h1>
          <SearchBar />
        </div>
      </div>
    </section>
  )
}

export default Hero