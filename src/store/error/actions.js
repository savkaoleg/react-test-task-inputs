import { ERROR_CHANGE } from './types'

export function setError (errorMsg: string) {
    return {
        type: ERROR_CHANGE,
        errorMsg
    }
}

