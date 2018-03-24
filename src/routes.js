import React from 'react'
import Loadable from 'react-loadable'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'

import domain from './domain/instance'

const Root = Loadable({
  loader: () => import(/* webpackChunkName: "Root" */ './components/Root'),
  loading: () => null
})
const Home = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ './pages/Home'),
  loading: () => null
})
const SignIn = Loadable({
  loader: () => import(/* webpackChunkName: "SignIn" */ './pages/SignIn'),
  loading: () => null
})
const SignUp = Loadable({
  loader: () => import(/* webpackChunkName: "SignUp" */ './pages/SignUp'),
  loading: () => null
})

const logout = async (nextState, replace, cb) => {
  await domain.get('logout_users_use_case').execute()
  replace('/signin')
  return cb()
}

const requireAuth = async (nextState, replace, cb) => {
  const user = await domain.get('current_users_use_case').execute()
  if (!user) {
    replace('/signin')
  }
  return cb()
}

const redirectToHome = async (nextState, replace, cb) => {
  const user = await domain.get('current_users_use_case').execute()
  if (user) {
    replace('/')
  }
  return cb()
}

export default (
  <Router>
    <Route component={Root}>
      <Route path='/'>
        <IndexRoute component={Home} onEnter={requireAuth} />
        <Route path='signup' component={SignUp} onEnter={redirectToHome} />
        <Route path='signin' component={SignIn} onEnter={redirectToHome} />
        <Route path='logout' onEnter={logout} />
      </Route>
    </Route>
  </Router>
)
