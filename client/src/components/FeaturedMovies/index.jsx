import React from 'react'
import { connect } from 'react-redux'
import { getFeaturedMovies } from '../../actions/movies'
import { chunk } from 'lodash'
import MovieCard from '../MovieCard'

class FeaturedMovies extends React.Component {
  componentDidMount() {
    this.props.getFeaturedMovies()
  }

  render() {
    const { featuredMovies } = this.props
    return (
      <div className="FeaturedMovies container">
        <h1>Featured New Releases</h1>
        <div>
          {chunk(featuredMovies.slice(0, 12), 6).map((row, rowIdx) => (
            <div key={rowIdx} className="columns">
              {row.map((movie, colIdx) => (
                <div key={colIdx} className="column">
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ featuredMovies }) => ({ featuredMovies })
export default connect(mapStateToProps, { getFeaturedMovies })(FeaturedMovies)