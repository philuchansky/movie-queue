import React from 'react'
import { connect } from 'react-redux'
import { addToQueue, removeFromQueue } from '../../actions/queue'

class QueueButton extends React.Component {

  handleAddToQueueClick() {
    const { addToQueue, movie: { id, poster_path } } = this.props
    addToQueue({TMDB_id: id, poster_path })
  }

  handleRemoveFromQueueClick() {
    const { removeFromQueue, movie } = this.props
    removeFromQueue(movie.id)
  }

  isInQueue() {
    const { movie, queue } = this.props
    return queue.movies.find(r => r.TMDB_id === movie.id)
  }

  render() {
    return (
      <div className="queue-button">
        {this.isInQueue.call(this)
          ? (
            <button className="button is-danger"
              onClick={this.handleRemoveFromQueueClick.bind(this)}
            >
              Remove From Queue
            </button>
          )
          : (
            <button className="button is-info"
              onClick={this.handleAddToQueueClick.bind(this)}
            >
              Add To Queue
            </button>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = ({ queue }) => ({ queue })
export default connect(mapStateToProps, { addToQueue, removeFromQueue })(QueueButton)