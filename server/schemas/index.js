const { mergeSchemas } = require('graphql-tools')

const { todosSchema } = require('./todos')
const { todosResolver } = require('./todos')

const schemas = [todosSchema]

const resolvers = [todosResolver]

const schema = mergeSchemas({
  schemas,
  resolvers
})

module.exports = schema
