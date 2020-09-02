import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

// import PrivateRoute from './privateRoute.js'
import PublicRoute from './publicRoute.js'
import NotFound from './notFound.js'

export default (
  <Switch>

    <PublicRoute path='/404-not-found' component={NotFound} />
    <Route component={() => <Redirect to='/404-not-found' />} />
  </Switch>
)
