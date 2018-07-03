import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()