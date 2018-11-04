import React from 'react'
import { todosQuery } from './queries/todos'
import { Query } from 'react-apollo'

function Todos() {
  return (
    <Query query={todosQuery}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return <div>{data.todos}</div>
      }}
    </Query>
  )
}

export default Todos
