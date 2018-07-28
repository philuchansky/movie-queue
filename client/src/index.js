import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import httpClient from './httpClient'
import { getCurrentUser } from './actions/auth'
import { getQueue } from './actions/queue'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'bulma/css/bulma.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faImdb } from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope, faLock, faGlobe,
  faPlayCircle, faFilm, faUser,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'

library.add(faImdb, faEnvelope, faLock, faGlobe, faPlayCircle, faFilm, faUser, faSpinner)

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    thunk
  ))
)

if(httpClient.getToken()) {
  store.dispatch(getCurrentUser())
  store.dispatch(getQueue())
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()