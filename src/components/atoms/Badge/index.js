import styled from 'styled-components'

const Badge = styled.span`
  display: inline-block;
  border-radius: 0.5em;
  font-size: ${props => (props.emph ? '0.9em' : '0.8em')};
  padding: ${props => (props.emph ? '0.625em 1em' : '0.3em 0.312em 0.4em')};
  color: ${props => (props.emph ? props.theme.colors.background : 'inherit')};
  background: ${props =>
    props.emph ? props.theme.colors.highlight : props.theme.colors.secondary};
  transition: color 0.25s ease-out, background 0.25s ease-out;
  &:hover {
    background: ${props => (props.emph ? props.theme.colors.hlHover : '')};
  }
`

export default Badge
