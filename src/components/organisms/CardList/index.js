import React from 'react'
import styled from 'styled-components'
import Container from '../../atoms/Container'
import Card from '../../molecules/Card'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  font-size: 0.9em;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`
const Item = styled(Card)`
  margin: 0 0 1em 0;
`

const CardList = ({ list }) => {
  return (
    <Container>
      <List>
        <Item {...list[0]} featured />
        {list.slice(1).map(item => (
          <Item key={item.id} {...item} />
        ))}
      </List>
    </Container>
  )
}

export default CardList
