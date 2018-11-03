const { ApolloServer } = require('apollo-server-express')

const schema = require('./schemas')

const apolloServer = new ApolloServer({ schema })

module.exports = apolloServer
