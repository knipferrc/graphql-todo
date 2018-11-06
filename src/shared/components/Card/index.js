import React from 'react'
import { Container, Title } from './styles'

function Card({ children }) {
  return (
    <Container>
      <Title>GraphQL Todo's</Title>
      {children}
    </Container>
  )
}

export default Card
