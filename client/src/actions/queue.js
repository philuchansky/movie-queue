import httpClient from '../httpClient'
import { ADD_TO_QUEUE } from '../types/queue'

const addToQueueLoading = () => ({ type: ADD_TO_QUEUE.LOADING })
// const addToQueueError = () => ({ type: ADD_TO_QUEUE.ERROR })
const addToQueueSuccess = (queueItem) => ({ type: ADD_TO_QUEUE.SUCCESS, payload: queueItem })
export function addToQueue(data) {
  return (dispatch) => {
    dispatch(addToQueueLoading())
    httpClient({ method: 'post', url: '/queue', data }).then(({ data: { queueItem } }) => {
      dispatch(addToQueueSuccess(queueItem))
    })
  }
}