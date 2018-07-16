import React from 'react'
import { connect } from 'react-redux'
import { getFeaturedMovies } from '../../actions/movies'
import MovieGrid from '../MovieGrid'

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
        <MovieGrid movies={movies} />
      </div>
    )
  }
}

const mapStateToProps = ({ featuredMovies }) => ({ featuredMovies })
export default connect(mapStateToProps, { getFeaturedMovies })(FeaturedMovies)