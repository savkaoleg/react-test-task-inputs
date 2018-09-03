import { ADD_INPUT, CHANGE_INPUT } from './types'
import uniqueID from '../../hooks/uniqueID'

export default function input (state = {}, action) {
  const { type, text } = action
  switch (type) {
    case ADD_INPUT:
      return {
        id: uniqueID(),
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
