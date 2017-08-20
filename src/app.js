/* eslint no-console:0 */
import React from 'react'
import ReactDOM from 'react-dom'

import {register} from '@schibstedspain/sui-bundler/registerServiceWorker'
import {Provider} from '@schibstedspain/ddd-react-redux'
import {AppContainer} from 'react-hot-loader'
import Router from 'react-router/lib/Router'
import match from 'react-router/lib/match'
import routes from './routes'
import browserHistory from 'react-router/lib/browserHistory'
import Styletron from 'styletron-client'
import {StyletronProvider} from 'styletron-react'

import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

import Root from './components/Root'
import i18n from './literals'
import PlanDeGira from './domain'

const config = {
  apiKey: 'AIzaSyAO2KU0mgjMjhSkdqLnluZ1g3SxT-qvDgM',
  authDomain: 'plandegira-359d8.firebaseapp.com',
  databaseURL: 'https://plandegira-359d8.firebaseio.com',
  projectId: 'plandegira-359d8',
  storageBucket: 'plandegira-359d8.appspot.com',
  messagingSenderId: '416314462852'
}
firebase.initializeApp(config)

const domain = new PlanDeGira()
domain.config('firebase', firebase)

const render = Component => match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
  if (error) { console.error({error}) }

  ReactDOM.render(
    <AppContainer>
      <StyletronProvider styletron={new Styletron()}>
        <Provider i18n={i18n} domain={domain}>
          <Router {...renderProps} />
        </Provider>
      </StyletronProvider>
    </AppContainer>,
    document.getElementById('root')
  )
})

render(Root)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default
    render(NewRoot)
  })
}

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})()
