import { OPEN_MODAL, CLOSE_MODAL } from '../types/modal'

export const openModalImage = (imgPath) => ({ type: OPEN_MODAL.IMAGE, payload: imgPath })
export const closeModal = { type: CLOSE_MODAL }