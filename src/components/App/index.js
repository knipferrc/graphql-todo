import React, { Fragment } from 'react'
import Routes from '../../routes'
import { ApolloProvider } from 'react-apollo'
import { client } from '../../store/apolloClient'
import GlobalStyle from '../GlobalStyle'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </Fragment>
  )
}

export default App
