import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import './index.scss'

let render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

if (module.hot) {
  const renderApp = render

  render = () => {
    try {
      renderApp()
    } catch (error) {
      console.log(error)
    }
  }

  module.hot.accept('./containers/App', () => {
    setTimeout(render)
  })
}

render()
