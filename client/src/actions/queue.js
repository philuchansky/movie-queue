import httpClient from '../httpClient'
import { GET_QUEUE, ADD_TO_QUEUE, REMOVE_FROM_QUEUE } from '../types/queue'

const getQueueLoading = () => ({ type: GET_QUEUE.LOADING })
const getQueueError = () => ({ type: GET_QUEUE.ERROR })
const getQueueSuccess = (queueItems) => ({ type: GET_QUEUE.SUCCESS, payload: queueItems })
export function getQueue() {
  return (dispatch) => {
    dispatch(getQueueLoading())
    return httpClient({ method: 'get', url: '/queue' })
      .then(({ data }) => {
        dispatch(getQueueSuccess(data))
        return data
      })
      .catch((error) => {
        dispatch(getQueueError(error.response.data.message))
        return false
      })
  }
}

const addToQueueLoading = () => ({ type: ADD_TO_QUEUE.LOADING })
const addToQueueError = () => ({ type: ADD_TO_QUEUE.ERROR })
const addToQueueSuccess = (queueItem) => ({ type: ADD_TO_QUEUE.SUCCESS, payload: queueItem })
export function addToQueue(data) {
  return (dispatch) => {
    dispatch(addToQueueLoading())
    return httpClient({ method: 'post', url: '/queue', data })
      .then(({ data: { queueItem } }) => {
        dispatch(addToQueueSuccess(queueItem))
        return queueItem
      })
      .catch((error) => {
        dispatch(addToQueueError(error.response.data.message))
        return false
      })
  }
}

const removeFromQueueLoading = () => ({ type: REMOVE_FROM_QUEUE.LOADING })
const removeFromQueueError = () => ({ type: REMOVE_FROM_QUEUE.ERROR })
const removeFromQueueSuccess = (queueItem) => ({ type: REMOVE_FROM_QUEUE.SUCCESS, payload: queueItem })
export function removeFromQueue(id) {
  return (dispatch) => {
    dispatch(removeFromQueueLoading())
    return httpClient({ method: 'delete', url: `/queue/${id}` })
      .then(({ data: { queueItem } }) => {
        dispatch(removeFromQueueSuccess(queueItem))
        return queueItem
      })
      .catch((error) => {
        dispatch(removeFromQueueError(error.response.data.message))
        return false
      })
  }
}