// The folder structure inside /App is aligned with
// this routes, so whenever you add a route, make sure
// it is in the /screens folder of its parent.
// Check below to see how its working.

import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from 'App'

// Webpack 2 supports ES2015 `System.import` by auto-
// chunking assets. Check out the following for more:
// https://gist.github.com/sokra/27b24881210b56bbaff7#code-splitting-with-es6


const Main = (nextState, cb) => {
  System.import('App/screens/Main')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e })
}

// We use `getComponent` to dynamically load routes.
// https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
const routes = (
  <Route path='/' component={App}>
    <IndexRoute getComponents={Main} />
  </Route>


)

// Unfortunately, HMR breaks when we dynamically resolve
// routes so we need to require them here as a workaround.
// https://github.com/gaearon/react-hot-loader/issues/288
if (module.hot) {
  require('App/screens/Main')
}

export default routes
