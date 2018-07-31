import React from 'react'
import { connect } from 'react-redux'
import { getFeaturedMovies } from '../../actions/movies'
import CardGrid from '../CardGrid'

class FeaturedMovies extends React.Component {
  componentDidMount() {
    const { getFeaturedMovies, featuredMovies } = this.props
    if(!featuredMovies.movies.length) getFeaturedMovies()
  }

  render() {
    const { featuredMovies: { loading, movies } } = this.props
    if(loading) return <h1 className="title">Loading...</h1>
    return (
      <div className="FeaturedMovies">
        <h1 className="title">New Releases</h1>
        <CardGrid data={movies} type="movies" imgField="poster_path" />
      </div>
    )
  }
}

const mapStateToProps = ({ featuredMovies }) => ({ featuredMovies })
export default connect(mapStateToProps, { getFeaturedMovies })(FeaturedMovies)