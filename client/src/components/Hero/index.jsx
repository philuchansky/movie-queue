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
            Lorem Ipsum Dolor
          </h1>
          <SearchBar />
          {/* <h1 className="title">
            Title
          </h1>
          <h2 className="subtitle">
            Subtitle
          </h2> */}
        </div>
      </div>

      {/* <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active"><a>Overview</a></li>
              <li><a>Modifiers</a></li>
              <li><a>Grid</a></li>
              <li><a>Elements</a></li>
              <li><a>Components</a></li>
              <li><a>Layout</a></li>
            </ul>
          </div>
        </nav>
      </div> */}
    </section>
  )
}

export default Hero