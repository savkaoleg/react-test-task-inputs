// @flow

import { setError } from '../error/actions'
import { setLoaded } from '../loaded/actions'
import { addInput } from '../input/actions'
import { REMOVE_INPUT } from './types'

export function removeInput (id: string){
  return {
      type: REMOVE_INPUT,
      id
  }
}

export function loadInputs () {
  return async (dispatch: Function) => {
    try {
      const response = await fetch('https://api.myjson.com/bins/xpf4k')
      const result = await response.json()

      if (result.value.length){
        result.value.split(' - ').map(item => dispatch(addInput(item)))
      } else {
        dispatch(setError('Sorry, Something wrong'))
      }
      dispatch(setLoaded(true))
    } catch (e) {
        dispatch(setError(e.message))
        dispatch(setLoaded(true))
    }
  }
}
