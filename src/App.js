import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import configureStore from './store/configureStore'
import bootstrap from './hooks/bootstrap'
import Container from './container'
import './App.scss'

const store = configureStore()
bootstrap(store)()

class App extends React.Component {
  render () {
    return (
      <Provider store={store} >
        <Container/>
      </Provider>
    )
  }
}

export default hot(module)(App)
