import React from 'react'
import { Route } from 'react-router-dom'

import PublicLayout from '../layouts/public/index.js'

/**
 * This route requires users to be authenticated
 *
 * @note: We can move PublicLayout to the components if we want multiple
 * authenticated layouts.
 */
export default ({ component: Component, layout: Layout = PublicLayout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
)
