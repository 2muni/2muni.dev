import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  li {
    &:not(:first-child) {
      margin-left: 0.8em;
    }
  }
`

export default List
