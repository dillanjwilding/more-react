import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { useAuth } from '../state/login.js'
import PrivateLayout from '../layouts/private/index.js'

/**
 * This route requires users to be authenticated.
 *
 * @note: We can move PrivateLayout to the components if we want multiple authenticated layouts.
 */
export default ({ component: Component, layout: Layout = PrivateLayout, ...rest }) => {
  const { token, user } = useAuth()
  if (!token || !user) return <Redirect to='/login' />
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />)
}
