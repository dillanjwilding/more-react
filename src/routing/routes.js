import React from 'react'
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import PrivateRoute from './privateRoute.js'
import PublicRoute from './publicRoute.js'

export default ({ routes, notFoundRoute = '/not-found' }) => (
  <Router>
    <Switch>
      {routes.map(route => route.private ? <PrivateRoute {...route} /> : <PublicRoute {...route} />)}
      <Route component={() => <Redirect to={notFoundRoute} />} />
    </Switch>
  </Router>
)
