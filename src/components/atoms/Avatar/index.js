import styled from 'styled-components'

const Avatar = styled.img`
  height: ${props => props.size || 72}px;
  width: ${props => props.size || 72}px;
  border-radius: 50%;
`

export default Avatar
