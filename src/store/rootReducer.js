import { combineReducers } from 'redux'
import inputs from './inputs'
import error from './error'
import loaded from './loaded'

const rootReducer = combineReducers({
  inputs,
  error,
  loaded
})

export default rootReducer
