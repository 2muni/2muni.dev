import styled from 'styled-components'

const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: ${props =>
    props.centered
      ? props.theme.sizes.maxWidthCentered
      : props.theme.sizes.maxWidth};
`

export default Container
