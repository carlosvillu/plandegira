/* eslint no-console:0 */
import React from 'react'
import ReactDOM from 'react-dom'

import {register} from '@schibstedspain/sui-bundler/registerServiceWorker'
import {Provider} from '@schibstedspain/ddd-react-redux'
import {AppContainer} from 'react-hot-loader'
import Router from 'react-router/lib/Router'
import routes from './routes'
import browserHistory from 'react-router/lib/browserHistory'
import Styletron from 'styletron-client'
import {StyletronProvider} from 'styletron-react'

import Root from './components/Root'
import i18n from './literals'
import domain, {fb} from './domain/instance'

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <StyletronProvider styletron={new Styletron()}>
        <Provider i18n={i18n} domain={domain}>
          <Router routes={routes} history={browserHistory} />
        </Provider>
      </StyletronProvider>
    </AppContainer>,
    document.getElementById('root')
  )

fb.auth().onAuthStateChanged(user => {
  console.log('UserApp', user)
  render(Root)
})

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default
    fb.auth().onAuthStateChanged(user => {
      console.log('UserApp Hot', user)
      render(NewRoot)
    })
  })
}

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})()
