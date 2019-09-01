import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  li {
    &:not(:first-child) {
      margin-left: 1em;
    }
  }
`

export default List
