const express = require('express')
const path = require('path')
const { ApolloServer, gql } = require('apollo-server-express')

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/api/ping', (req, res) => {
  res.json({ pong: 'pong' })
})

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../build')))
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
  })
}
app.listen(port, () => console.log(`Listening on port ${port}`))
