const { gql } = require('apollo-server')

const todosTypes = gql`
  type Query {
    todos: String
  }
`

module.exports = todosTypes
