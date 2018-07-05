import React from 'react'
import { connect } from 'react-redux'
import { getMovie } from '../../actions/movies'

class MovieDetail extends React.Component {
  componentDidMount() {
    const { getMovie, match: { params: { title } } } = this.props
    getMovie(title)
  }

  render() {
    return (
      <div className="MovieDetail">
        <h1>Movie Detail</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ movieDetail }) => ({ movieDetail })
export default connect(mapStateToProps, { getMovie })(MovieDetail)