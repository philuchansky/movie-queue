import { OPEN_MODAL, CLOSE_MODAL } from '../types/modal'

const initialState = {
  active: false,
  type: null,
  content: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case OPEN_MODAL.IMAGE:
      return { ...state, active: true, type: 'image', content: action.payload }
    case CLOSE_MODAL:
      return initialState
    default: return state
  }
}