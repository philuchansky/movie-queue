import { OPEN_MODAL, CLOSE_MODAL } from '../types/modal'

export const openModalImage = (title, content) => ({
  type: OPEN_MODAL.IMAGE,
  payload: { title, content }
})

export const openModalTrailer = (title, content) => ({
  type: OPEN_MODAL.TRAILER,
  payload: { title, content }
})

export const closeModal = () => ({ type: CLOSE_MODAL })