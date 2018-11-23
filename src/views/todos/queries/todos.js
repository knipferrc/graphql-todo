import gql from 'graphql-tag.macro'

export const todosQuery = gql`
  query {
    todos {
      key
      value
    }
  }
`
