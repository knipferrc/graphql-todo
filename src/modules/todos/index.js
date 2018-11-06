import React from 'react'
import { todosQuery } from './queries/todos'
import { Query } from 'react-apollo'
import { Container, Centered } from './styles'
import Card from '../../shared/components/Card'

function Todos() {
  return (
    <Container>
      <Card>
        <Centered>
          <input type="text" placeholder="New todo" />
          <Query query={todosQuery}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>
              if (error) return <p>Error :(</p>

              return data.todos.map(todo => (
                <div key={todo.key}>{todo.value}</div>
              ))
            }}
          </Query>
        </Centered>
      </Card>
    </Container>
  )
}

export default Todos
