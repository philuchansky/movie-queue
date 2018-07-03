import React from 'react'
import { connect } from 'react-redux'
import { getFeaturedMovies } from '../../actions/movies'

class FeaturedMovies extends React.Component {
  componentDidMount() {
    this.props.getFeaturedMovies()
  }

  render() {
    return (
      <h1>Featured Movies Here</h1>
    )
  }
}

const mapStateToProps = ({ featuredMovies }) => ({ featuredMovies })
export default connect(mapStateToProps, { getFeaturedMovies })(FeaturedMovies)