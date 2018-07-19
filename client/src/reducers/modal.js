import { OPEN_MODAL, CLOSE_MODAL } from '../types/modal'

const initialState = {
  active: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case OPEN_MODAL.IMAGE:
      return { ...state, active: true }
    case CLOSE_MODAL:
      return initialState
    default: return state
  }
}