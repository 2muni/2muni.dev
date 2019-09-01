import styled from 'styled-components'

const Badge = styled.span`
  border-radius: 0.5em;
  font-size: ${props => (props.emph ? '0.9em' : '0.8em')};
  padding: ${props => (props.emph ? '0.5em 1em' : '0.3em 0.312em 0.4em')};
  color: ${props =>
    props.emph ? props.theme.colors.background : props.theme.colors.textColor};
  background: ${props =>
    props.emph ? props.theme.colors.highlight : props.theme.colors.secondary};
`

export default Badge
