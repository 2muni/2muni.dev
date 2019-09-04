import React from 'react'
import styled from 'styled-components'
import Container from '../../atoms/Container'
import Card from '../../molecules/Card'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  font-size: 0.9em;
  margin-top: 2.625rem;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`

const CardList = ({ list }) => {
  return (
    <Container>
      <List>
        <Card {...list[0]} featured />
        {list.slice(1).map(item => (
          <Card key={item.id} {...item} />
        ))}
      </List>
    </Container>
  )
}

export default CardList
