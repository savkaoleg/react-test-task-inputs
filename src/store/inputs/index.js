import input from '../input/index'
import { ADD_INPUT, CHANGE_INPUT } from '../input/types'
import { REMOVE_INPUT } from './types'


export default function inputs (state = [], action) {
  const { type } = action
  switch (type) {
    case ADD_INPUT:
      return [
        ...state,
        input(undefined, action)
      ]
    case CHANGE_INPUT:
      return state.map(inpt => input(inpt, action))
    case REMOVE_INPUT:
      return state.filter(inpt => inpt.id !== action.id)
    default:
      return state
  }
}
