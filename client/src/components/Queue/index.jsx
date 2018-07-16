import React from 'react'
import { connect } from 'react-redux'
import { getQueue } from '../../actions/queue'
import MovieGrid from '../MovieGrid'

class Queue extends React.Component {
  componentDidMount() {
    this.props.getQueue()
  }

  render() {
    const { queue: { movies, loading } } = this.props
    if(loading) return <h1>Loading...</h1>
    let formattedQueue = movies.map(queueItem => ({ ...queueItem, id: queueItem.TMDB_id }))
    return (
      <div className="Queue">
        <MovieGrid movies={formattedQueue} />
      </div>
    )
  }
}

const mapStateToProps = ({ queue }) => ({ queue })
export default connect(mapStateToProps, { getQueue })(Queue)