const { gql } = require('apollo-server')

const todosTypes = gql`
  type Todo {
    key: String
    value: String
  }
  type Query {
    todos: [Todo]
  }
`

module.exports = todosTypes
