import React, { lazy, Suspense } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

const Todos = lazy(() => import('./modules/todos'))

function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Todos} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes
