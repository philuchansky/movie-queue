import React from 'react'
import { connect } from 'react-redux'
import { getFeaturedMovies } from '../../actions/movies'

class FeaturedMovies extends React.Component {
  componentDidMount() {
    this.props.getFeaturedMovies()
  }

  render() {
    const { featuredMovies } = this.props
    return (
      <div className="FeaturedMovies">
        <h1>Featured New Releases</h1>
        <ul>
          {featuredMovies.map((m, idx) => (
            <li key={idx}>
              <img src={m.img} alt={m.title} />
              {m.title}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ featuredMovies }) => ({ featuredMovies })
export default connect(mapStateToProps, { getFeaturedMovies })(FeaturedMovies)