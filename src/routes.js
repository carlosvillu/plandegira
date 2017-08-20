import React from 'react'
import Loadable from 'react-loadable'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
// import IndexRoute from 'react-router/lib/IndexRoute'

const Root = Loadable({loader: () => import(/* webpackChunkName: "Root" */ './components/Root'), loading: () => null})
const Home = Loadable({loader: () => import(/* webpackChunkName: "Home" */ './pages/Home'), loading: () => null})
const SignIn = Loadable({loader: () => import(/* webpackChunkName: "SignIn" */ './pages/SignIn'), loading: () => null})
const SignUp = Loadable({loader: () => import(/* webpackChunkName: "SignUp" */ './pages/SignUp'), loading: () => null})

export default (
  <Router>
    <Route component={Root}>
      <Route path='/' component={Home} />
      <Route path='/signup' component={SignUp} />
      <Route path='/signin' component={SignIn} />
    </Route>
  </Router>
)
