import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../../routes'
import { ApolloProvider } from 'react-apollo'
import { client } from '../../../store/apolloClient'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
