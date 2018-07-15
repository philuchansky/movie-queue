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
    const { featuredMovies, loading } = this.props
    if(loading) return <h2 className="title">Loading...</h2>
    return (
      <div className="FeaturedMovies">
        <h1 className="title">New Releases</h1>
        <div>
          {chunk(featuredMovies.slice(0, 10), 5).map((row, rowIdx) => (
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

const mapStateToProps = ({ featuredMovies, loading }) => ({ featuredMovies, loading })
export default connect(mapStateToProps, { getFeaturedMovies })(FeaturedMovies)