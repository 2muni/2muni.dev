import styled from 'styled-components'

const Badge = styled.span`
  display: inline-block;
  border-radius: 0.5em;
  font-size: ${props => (props.emph ? '0.9em' : '0.8em')};
  padding: 0.5em;
  color: ${props => (props.emph ? props.theme.colors.textColor : 'inherit')};
  background: ${props =>
    props.emph ? props.theme.colors.tertiary : props.theme.colors.secondary};
  transition: color 0.25s ease-out, background 0.25s ease-out;
  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`

export default Badge
