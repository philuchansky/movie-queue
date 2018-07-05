import React from 'react'
import { connect } from 'react-redux'
import { getFeaturedMovies } from '../../actions/movies'
import MovieThumb from '../MovieThumb'

class FeaturedMovies extends React.Component {
  componentDidMount() {
    this.props.getFeaturedMovies()
  }

  render() {
    const { featuredMovies } = this.props
    return (
      <div className="FeaturedMovies">
        <h1>Featured New Releases</h1>
        <div>
          {featuredMovies.map((movie, idx) => (
            <MovieThumb key={idx} movie={movie} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ featuredMovies }) => ({ featuredMovies })
export default connect(mapStateToProps, { getFeaturedMovies })(FeaturedMovies)