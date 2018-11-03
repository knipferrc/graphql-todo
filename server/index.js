const express = require('express')
const path = require('path')
const apolloServer = require('./apolloServer')

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/api/health', (req, res) => {
  res.json({ health: '100%' })
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../build')))
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
  })
}
app.listen(port, () => console.log(`Listening on port ${port}`))

apolloServer.applyMiddleware({ app })
