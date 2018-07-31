import React from 'react'
import { connect } from 'react-redux'
import { tmdbImgUrl } from '../../helpers'
import NavBar from '../NavBar'
import SearchBar from '../SearchBar'
import './Hero.css'

const Hero = (props) => {
  const { featuredMovies: { movies } } = props
  const randomMovie = movies[Math.floor(Math.random() * movies.length)]
  const heroStyles = {
    backgroundImage: randomMovie
      ? (`
        linear-gradient(rgba(255, 221, 87, .85), rgba(255, 221, 87, .85)),
        url('${tmdbImgUrl(randomMovie.backdrop_path, 'huge')}')
      `)
      : (
        `linear-gradient(rgba(255, 221, 87, .85), rgba(255, 221, 87, .85))`
      )
  }
  return (
    <section
      className="Hero hero is-warning is-medium"
      style={heroStyles}
    >
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Start Building Your Queue
          </h1>
          <SearchBar placeholder={randomMovie ? randomMovie.title : "Search"} />
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = ({ featuredMovies }) => ({ featuredMovies })
export default connect(mapStateToProps)(Hero)