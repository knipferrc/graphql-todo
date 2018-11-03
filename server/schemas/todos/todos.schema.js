const { makeExecutableSchema } = require('apollo-server')
const todosTypes = require('./todos.types')

const todosSchema = makeExecutableSchema({
  typeDefs: [todosTypes]
})

module.exports = todosSchema
