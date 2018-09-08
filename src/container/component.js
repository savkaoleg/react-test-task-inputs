import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Loader from '../components/Loader'
import Button from '../components/Button'
import Card from '../components/Card'
import Input from '../components/Input'
import strFormat from '../hooks/strFormat'

class Home extends Component {
  constructor (props) {
    super(props)
  }

  addInput = () => {
    this.props.addInput()
  }

  changeInput = (event) => {
    this.props.changeInput(event.currentTarget.name, event.currentTarget.value)
  }


  removeInput = (id: string) => {
    this.props.removeInput(id)
  }

  renderApp = () => {
    const { inputs } = this.props
    const header = inputs.filter(input => input.text.length).map(input => strFormat(input.text)).join(' - ')

    return (
      <div className="container">
        <h1 className="textAlignCenter">{ header }</h1>
        <div className="cardsContainer">
          <ReactCSSTransitionGroup
            transitionName="inputsAnimation"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {inputs.map(
              input => (
                <div
                  className="card"
                  key={input.id}
                >
                  <Input
                    name={input.id}
                    value={input.text}
                    onChange={this.changeInput}
                    placeholder="Enter some text"
                  />
                  <Button
                    warn raised
                    text="Remove"
                    onClick={() => { this.removeInput(input.id) }}
                  />
                </div>
              )
            )}
          </ReactCSSTransitionGroup>
        </div>
        <div className="textAlignCenter">
          <Button
            primary
            raised
            text="Add"
            onClick={this.addInput}
          />
        </div>
      </div>
    )
  }

  render () {
    const { loaded, error } = this.props

    if (loaded){
      if (!error){
        return this.renderApp()
      } else {
        return (
          <Card
            title="Error"
            text={error}
          />
        )
      }
    } else {
      return (
        <Loader text="Loading ..."/>
      )
    }
  }
}

Home.propTypes = {
  addInput: PropTypes.func,
  changeInput: PropTypes.func,
  error: PropTypes.string,
  inputs: PropTypes.array,
  loaded: PropTypes.bool,
  removeInput: PropTypes.func
}

export default Home
