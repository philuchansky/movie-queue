import React from 'react'
import { connect } from 'react-redux'
import { getQueue } from '../../actions/queue'
import { chunk } from 'lodash'
import MovieCard from '../MovieCard'

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
        {chunk(formattedQueue.reverse().slice(0, 10), 5).map((row, rowIdx) => (
              <div key={rowIdx} className="columns">
                {row.map((movie, colIdx) => (
                  <div key={colIdx} className="column is-one-fifth">
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
            ))}
      </div>
    )
  }
}

const mapStateToProps = ({ queue }) => ({ queue })
export default connect(mapStateToProps, { getQueue })(Queue)