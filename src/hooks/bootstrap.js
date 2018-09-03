import { loadInputs } from '../store/inputs/actions'

export default function bootstrap ({ dispatch }) {
  return () => {
     dispatch(loadInputs())
  }
}
