import { connect } from 'react-redux'
import Component from './component'
import { changeInput, addInput } from '../store/input/actions'
import { removeInput } from '../store/inputs/actions'

const mapStateToProps = (state) => {
  return {
    error: state.error,
    inputs: state.inputs,
    loaded: state.loaded
  }
}

const mapDispatchToProps = (dispatch) =>
({
  changeInput (id, text) {
    dispatch(changeInput(id, text))
  },

  addInput () {
    dispatch(addInput(''))
  },

  removeInput (id) {
    dispatch(removeInput(id))
  }
})


const Container = connect(mapStateToProps, mapDispatchToProps)(Component)

export default Container
