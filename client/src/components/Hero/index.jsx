import React from 'react'
import { connect } from 'react-redux'
import { tmdbImgUrl } from '../../helpers'
import NavBar from '../NavBar'
import SearchBar from '../SearchBar'
import './Hero.css'

const Hero = (props) => {
  return (
    <section
      className="Hero hero is-warning is-medium"
      style={props.featuredMovies.movies[0] && {
        backgroundImage: `linear-gradient(rgba(255, 221, 87, .45), rgba(255, 221, 87, .45)), url('${tmdbImgUrl(props.featuredMovies.movies[0].backdrop_path, 'huge')}')`
      }}
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

const mapStateToProps = ({ featuredMovies }) => ({ featuredMovies })
export default connect(mapStateToProps)(Hero)