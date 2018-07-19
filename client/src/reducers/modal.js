import { OPEN_MODAL, CLOSE_MODAL } from '../types/modal'

const initialState = {
  title: null,
  content: null,
  type: null,
  active: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case OPEN_MODAL.IMAGE:
      return { ...state, ...action.payload, type: 'image', active: true   }
    case OPEN_MODAL.TRAILER:
      return { ...state, ...action.payload, type: 'trailer', active: true }
    case CLOSE_MODAL:
      return initialState
    default: return state
  }
}