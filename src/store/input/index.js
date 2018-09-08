import { ADD_INPUT, CHANGE_INPUT } from './types'
import uniqueId from '../../hooks/uniqueId'

export default function input (state = {}, action) {
  const { type, text } = action
  switch (type) {
    case ADD_INPUT:
      return {
        id: uniqueId(),
        text
      }
    case CHANGE_INPUT:
      if (state.id === action.id) {
        return Object.assign({}, state, {
          text: text
        })
      }
      return state
    default:
      return state
  }
}
