import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Todos from './views/todos'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Todos} />
    </Switch>
  )
}

export default Routes