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
    const { featuredMovies: { loading, movies } } = this.props
    if(loading) return <h1 className="title">Loading...</h1>
    return (
      <div className="FeaturedMovies">
        <h1 className="title">New Releases</h1>
        <div>
          {chunk(movies.slice(0, 10), 5).map((row, rowIdx) => (
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