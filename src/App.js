import React, { Component } from 'react'
import './App.css'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class App extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            hello
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>

          return <div>{data.hello}</div>
        }}
      </Query>
    )
  }
}

export default App
