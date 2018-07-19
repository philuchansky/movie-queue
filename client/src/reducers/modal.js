import { OPEN_MODAL, CLOSE_MODAL } from '../types/modal'

const initialState = {
  active: false,
  type: null,
  title: null,
  content: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case OPEN_MODAL.IMAGE:
      const { title, content } = action.payload
      return { ...state, active: true, type: 'image', title, content }
    case CLOSE_MODAL:
      return initialState
    default: return state
  }
}