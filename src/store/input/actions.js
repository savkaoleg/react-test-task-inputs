import { ADD_INPUT, CHANGE_INPUT } from './types'

export function addInput (text: string) {
    return {
        type: ADD_INPUT,
        text
    }
}

export function changeInput (id:string, text: string) {
    return {
        type: CHANGE_INPUT,
        id,
        text
    }
}
